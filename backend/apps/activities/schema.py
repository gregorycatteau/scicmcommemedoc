import graphene
from graphene_django import DjangoObjectType

from apps.activities.models import Activity


class ActivityType(DjangoObjectType):
    class Meta:
      model = Activity
      fields = ("id", "title", "description", "starts_at", "registration_url", "is_published")


class Query(graphene.ObjectType):
    all_activities = graphene.List(ActivityType)

    def resolve_all_activities(root, info):
        return Activity.objects.filter(is_published=True)
