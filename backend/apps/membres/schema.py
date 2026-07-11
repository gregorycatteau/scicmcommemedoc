import graphene
from graphene_django import DjangoObjectType

from apps.membres.models import MemberRequest, Membre


class MembreType(DjangoObjectType):
    class Meta:
      model = Membre
      fields = ("id", "username", "email", "bio", "is_cooperative", "date_joined")


class MemberRequestType(DjangoObjectType):
    class Meta:
      model = MemberRequest
      fields = ("id", "name", "email", "reason", "created_at", "handled")


class Query(graphene.ObjectType):
    all_membres = graphene.List(MembreType)
    member_requests = graphene.List(MemberRequestType)

    def resolve_all_membres(root, info):
        return Membre.objects.all()

    def resolve_member_requests(root, info):
        return MemberRequest.objects.order_by("-created_at")


class CreateMemberRequest(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        email = graphene.String(required=True)
        reason = graphene.String(required=True)

    ok = graphene.Boolean()
    member_request = graphene.Field(MemberRequestType)

    @classmethod
    def mutate(cls, root, info, name: str, email: str, reason: str):
        member_request = MemberRequest.objects.create(name=name, email=email, reason=reason)
        return CreateMemberRequest(ok=True, member_request=member_request)


class Mutation(graphene.ObjectType):
    create_member_request = CreateMemberRequest.Field()
