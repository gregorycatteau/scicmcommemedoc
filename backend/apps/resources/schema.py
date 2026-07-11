import graphene
from graphene_django import DjangoObjectType

from apps.resources.models import Product, Resource, ResourceCategory


class ResourceCategoryType(DjangoObjectType):
    class Meta:
        model = ResourceCategory
        fields = ("id", "name", "slug")


class ProductType(DjangoObjectType):
    class Meta:
        model = Product
        fields = ("id", "name", "slug")


class ResourceType(DjangoObjectType):
    class Meta:
        model = Resource
        exclude = ("verified_by",)


class Query(graphene.ObjectType):
    resources = graphene.List(ResourceType, limit=graphene.Int(default_value=24))
    resource = graphene.Field(ResourceType, slug=graphene.String(required=True))

    def resolve_resources(root, info, limit: int = 24):
        safe_limit = min(max(limit, 1), 50)
        return Resource.objects.filter(active=True).order_by("name")[:safe_limit]

    def resolve_resource(root, info, slug: str):
        return Resource.objects.filter(active=True, slug=slug).first()
