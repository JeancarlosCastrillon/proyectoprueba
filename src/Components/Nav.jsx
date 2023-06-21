import React from "react";
import { Links, NavContainer, NavList, NavRefer } from "./Styled/StyledNav";


const Nav = () => {
    return(
        <NavContainer>
            <NavList>
                <Links><NavRefer><i class="fa-solid fa-house fa-lg"></i></NavRefer> Home</Links>
                <Links><NavRefer><i class="fa-solid fa-square fa-lg"></i></NavRefer> Interface</Links>
                <Links><NavRefer><i class="fa-sharp fa-solid fa-pager fa-lg"></i></NavRefer> Components</Links>
                <Links><NavRefer><i class="fa-sharp fa-solid fa-file fa-lg"></i></NavRefer> Pages</Links>
                <Links><NavRefer><i class="fa-solid fa-check-to-slot fa-lg"></i></NavRefer> Forms</Links>
                <Links><NavRefer><i class="fa-regular fa-image fa-lg"></i></NavRefer> Gallery</Links>
                <Links><NavRefer><i class="fa-solid fa-file-invoice fa-lg"></i></NavRefer> Documentation</Links>
            </NavList>
        </NavContainer>
    )
};

export default Nav; 