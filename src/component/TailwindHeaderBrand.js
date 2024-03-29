const TailwindHeaderBrand = (props) => {
    return(
        <h1 className="py-6 bg-brand_orange text-black font-bold tracking-widest flex justify-center justify-items-center">{props.children}</h1>
    )
}

export default TailwindHeaderBrand