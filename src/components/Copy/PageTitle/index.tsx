const PageTitle = ({title, textColor}: {title: string, textColor: string}) => {
  return (
    <div className="full-width text-left">
        <h1 className={`font-bold text-${textColor} w-full text-24px text-2xl`}>{title}</h1>
    </div>
  )
}

export default PageTitle