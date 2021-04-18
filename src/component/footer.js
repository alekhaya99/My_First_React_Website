import React from 'react'

export const Footer = () => {
    let footerStyle={
position:"fixed",

bottom: "0",
width:"100%",
outerHeight:"100%"
    }
    return (
        <footer className="bg-dark text-light" style={footerStyle}>
            <p className="text-center">Copyright &copy; AlekhayaDatta.com</p>
            
        </footer>
    )
}
