import { Billboard as BillboardType } from "@/types"

interface BillboardProps {
    data: BillboardType
}

const Billboard: React.FC<BillboardProps> = ({data}) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
      className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover h-[250px] w-full"
       style={{backgroundImage: `url(${data?.imageUrl})`}}>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
       <div className="h-full flex flex-col justify-center items-center text-center gap-y-8">
        <div className="font-bold text-3xl sm:text-5xl lf:text-6xl sm:max-w-xl max-w-xs text-white absolute">
          {data.label}
        </div>
       </div>
      </div>
    </div>
  )
}

export default Billboard