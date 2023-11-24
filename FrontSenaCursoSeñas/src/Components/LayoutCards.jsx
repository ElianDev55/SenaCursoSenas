

export function LayoutCards({children}) {


  return (
    <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-3  pt-20 justify-center ">
        
        
        {children}
    </div>
  );
}
