import graphene

from apps.activities.schema import Query as ActivitiesQuery
from apps.membres.schema import Mutation as MembresMutation
from apps.membres.schema import Query as MembresQuery
from apps.resources.schema import Query as ResourcesQuery


class Query(ResourcesQuery, ActivitiesQuery, MembresQuery, graphene.ObjectType):
    pass


class Mutation(MembresMutation, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
