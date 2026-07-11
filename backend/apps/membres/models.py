from django.contrib.auth.models import AbstractUser
from django.db import models


class Membre(AbstractUser):
    bio = models.TextField(blank=True)
    is_cooperative = models.BooleanField(default=False)
    date_joined = models.DateField(auto_now_add=True)

    def __str__(self) -> str:
        return f"{self.username} ({self.email})"


class MemberRequest(models.Model):
    name = models.CharField(max_length=120)
    email = models.EmailField()
    reason = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    handled = models.BooleanField(default=False)

    def __str__(self) -> str:
        return f"{self.name} ({self.email})"
