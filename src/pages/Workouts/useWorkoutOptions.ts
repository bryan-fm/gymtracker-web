import { useQuery } from '@apollo/client/react'
import { GET_WORKOUTS } from './workoutsQuery'
import { WorkoutKind } from '../../enums/WorkoutKindEnum'

export function useWorkoutsOptions() {
  const { data, loading } = useQuery(GET_WORKOUTS)

  const options =
    data?.workouts.map((item: any) => ({
      id: item.id,
      text: item.name,
      img: item.image,
      subText: WorkoutKind[item.kind],
    })) ?? []

  return { options, loading }
}
