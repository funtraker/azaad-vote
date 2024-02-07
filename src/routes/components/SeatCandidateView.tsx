import { Candidate, Seat } from '../../hooks/useData/useLoadData'

const SeatCandidateView = ({ seat }: { seat: Seat }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col mb-8">
        <div className="font-mono font-bold text-3xl mb-3 text-emerald-500">
          Candidate
        </div>
        <div className="flex text-gray-600 font-mono text-3xl">
          {seat.pti_data.candidate_name}
        </div>
      </div>
    </div>
  )
}

export default SeatCandidateView
