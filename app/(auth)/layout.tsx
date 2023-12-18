const layout = ({children}:{children: React.ReactNode}) =>{
    return(
        <div className="flex-center min-h-screen bg-zinc-300 bg-dotted-pattern bg-cover bg-fixed bg-center">
            {children}
        </div>
    )
}

export default layout;