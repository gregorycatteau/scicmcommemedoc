from django.db import models


class ResourceCategory(models.Model):
    name = models.CharField(max_length=120, unique=True)
    slug = models.SlugField(max_length=140, unique=True)
    active = models.BooleanField(default=True)

    def __str__(self) -> str:
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=120, unique=True)
    slug = models.SlugField(max_length=140, unique=True)
    active = models.BooleanField(default=True)

    def __str__(self) -> str:
        return self.name


class Resource(models.Model):
    class ResourceType(models.TextChoices):
        PRODUCTEUR = "producteur", "Producteur"
        ARTISAN = "artisan", "Artisan"
        COMMERCE = "commerce", "Commerce"
        MARCHE = "marche", "Marche"
        ASSOCIATION = "association", "Association"
        SERVICE = "service", "Service"
        LIEU = "lieu", "Lieu"
        PARTENAIRE = "partenaire", "Partenaire"
        ATELIER = "atelier", "Atelier"
        POINT_RELAIS = "point-relais", "Point relais"
        AUTRE = "autre", "Autre"

    class VerifiedStatus(models.TextChoices):
        NON_VERIFIE = "non-verifie", "Non verifie"
        EN_COURS = "en-cours", "En cours"
        VERIFIE = "verifie", "Verifie"
        INFORMATION_PERIMEE = "information-perimee", "Information perimee"
        FERME = "ferme", "Ferme"
        REFUSE = "refuse", "Refuse"

    slug = models.SlugField(max_length=180, unique=True)
    name = models.CharField(max_length=180)
    short_description = models.CharField(max_length=280)
    full_description = models.TextField(max_length=4000)
    resource_type = models.CharField(max_length=40, choices=ResourceType.choices)
    categories = models.ManyToManyField(ResourceCategory, blank=True)
    products = models.ManyToManyField(Product, blank=True)
    services = models.JSONField(default=list, blank=True)
    organization_name = models.CharField(max_length=180, blank=True)
    address = models.CharField(max_length=240, blank=True)
    locality = models.CharField(max_length=140, blank=True)
    postal_code = models.CharField(max_length=20, blank=True)
    latitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    longitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    phone = models.CharField(max_length=40, blank=True)
    email = models.EmailField(blank=True)
    website = models.URLField(blank=True)
    opening_hours_note = models.CharField(max_length=500, blank=True)
    distribution_modes = models.JSONField(default=list, blank=True)
    payment_methods = models.JSONField(default=list, blank=True)
    accessibility = models.JSONField(default=list, blank=True)
    certifications = models.JSONField(default=list, blank=True)
    labels = models.JSONField(default=list, blank=True)
    seasonality = models.JSONField(default=list, blank=True)
    verified_status = models.CharField(max_length=40, choices=VerifiedStatus.choices, default=VerifiedStatus.NON_VERIFIE)
    verified_at = models.DateField(null=True, blank=True)
    verified_by = models.ForeignKey("membres.Membre", null=True, blank=True, on_delete=models.SET_NULL)
    source_url = models.URLField(blank=True)
    source_note = models.CharField(max_length=1000)
    expires_at = models.DateField(null=True, blank=True)
    featured = models.BooleanField(default=False)
    active = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.name


class ResourceOpeningHour(models.Model):
    resource = models.ForeignKey(Resource, related_name="opening_hours", on_delete=models.CASCADE)
    weekday = models.PositiveSmallIntegerField()
    opens_at = models.TimeField(null=True, blank=True)
    closes_at = models.TimeField(null=True, blank=True)
    note = models.CharField(max_length=240, blank=True)


class ResourceVerification(models.Model):
    resource = models.ForeignKey(Resource, related_name="verifications", on_delete=models.CASCADE)
    status = models.CharField(max_length=40, choices=Resource.VerifiedStatus.choices)
    source_note = models.CharField(max_length=1000)
    checked_at = models.DateTimeField(auto_now_add=True)
    checked_by = models.ForeignKey("membres.Membre", null=True, blank=True, on_delete=models.SET_NULL)


class ResourceSuggestion(models.Model):
    name = models.CharField(max_length=180)
    locality = models.CharField(max_length=140, blank=True)
    reason = models.TextField(max_length=1200)
    source_note = models.TextField(max_length=1200)
    created_at = models.DateTimeField(auto_now_add=True)
    moderated = models.BooleanField(default=False)


class ResourceReport(models.Model):
    resource = models.ForeignKey(Resource, null=True, blank=True, on_delete=models.SET_NULL)
    kind = models.CharField(max_length=80)
    message = models.TextField(max_length=1200)
    created_at = models.DateTimeField(auto_now_add=True)
    handled = models.BooleanField(default=False)
