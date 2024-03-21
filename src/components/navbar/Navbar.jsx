import { Link, useLocation } from "react-router-dom";
import router from "../../routes/routes";
import logo from "../../assets/images/logo/logo.png";

const Navbar = () => {
  const urlPath = useLocation().pathname.replace("/", "");
  return (
    <nav className="py-4">
      <div className="flex container justify-between items-center  mx-auto">
        <div>
          <Link to="/">
            <img src={logo} alt="" width={200} />
          </Link>
        </div>
        <ul className="flex items-center justify-center">
          {router?.routes?.map((route, i) => {
            return (
              <div key={i}>
                {route?.children?.length > 0 &&
                  route?.children?.map((children, _index) => {
                    const childrenPath = children.path.replace("/", "");
                    return (
                      <Link
                        key={_index}
                        className={
                          urlPath === childrenPath
                            ? `mx-5 text-[18px] text-[#FF8202]`
                            : `mx-5 text-[18px] hover:text-[#FF8202] `
                        }
                        to={children.path}
                      >
                        {children?.name.toUpperCase()}
                      </Link>
                    );
                  })}
              </div>
            );
          })}
        </ul>
        <button className="text-[22px] text-[#FFFFFF] bg-[#50A2CA] px-4 py-2 rounded-md">
          Request Demo
        </button>
      </div>
    </nav>

    // <nav>
    //   <div className="flex container justify-between items-center  mx-auto">
    //     <div>
    //       <ul>
    //         {router.routes?.map((route, index) => {
    //           return (
    //             <li key={index}>
    //               <Link to={route.path}>{route?.name}</Link>
    //               {route?.children?.length && (
    //                 <>
    //                   <ul className="ml-4">
    //                     {route?.children?.map((child, _index) => {
    //                       return (
    //                         <li key={_index}>
    //                         <Link to={child.path}>{child?.name}</Link>
    //                         </li>
    //                       );
    //                     })}
    //                   </ul>
    //                 </>
    //               )}
    //             </li>
    //           );
    //         })}
    //       </ul>
    //       {/* <Link to="/">Home nav</Link>
    //       <Link to="/about">about nav</Link> */}
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;
