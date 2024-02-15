import { ComponentProps, FC } from "react";

type ContainerProps = ComponentProps<"div"> & {
  
  };

const Layout: FC<ContainerProps> =({children})=>{
    return(
        <div className="w-full h-[100vh] bg-black">
            {children}
        </div>
    )
};
export default Layout