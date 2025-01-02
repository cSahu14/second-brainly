import CardComponent from "../componenets/CardComponent"

const HomePage = () => {
  return (
    <>
        <div className="flex flex-wrap gap-4 w-full">
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>

        </div>
    </>
  )
}

export default HomePage