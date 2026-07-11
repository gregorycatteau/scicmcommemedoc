from django.db import models


class Activity(models.Model):
    title = models.CharField(max_length=160)
    description = models.TextField()
    starts_at = models.DateTimeField(null=True, blank=True)
    registration_url = models.URLField(blank=True)
    is_published = models.BooleanField(default=True)

    class Meta:
        ordering = ["starts_at", "title"]

    def __str__(self) -> str:
        return self.title
