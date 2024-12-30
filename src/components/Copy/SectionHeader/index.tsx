const SectionHeader = ({title, textColor}: {title: string, textColor: string}) => {
  return (
    <div className="full-width text-left">
        <h2 className={`font-bold text-${textColor} w-full text-20px text-2xl`}>{title}</h2>
    </div>
  )
}

export default SectionHeader