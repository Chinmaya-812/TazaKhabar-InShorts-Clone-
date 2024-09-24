import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/sideSlice'
import Location from './Location'

const Header = () => {
  // const store=useSelector((i)=>i.side.isSidebarOpen)
  const dispatch=useDispatch()


  return (
    <div className="grid grid-flow-col shadow-lg fixed top-0 w-full bg-gray-50 z-50 px-3 py-1">
      <div className="flex col-span-2">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAY1BMVEX///8AAADIyMjZ2dnPz88jIyMeHh7c3Ny9vb0/Pz8uLi7n5+egoKD6+vrS0tLx8fFsbGwMDAwzMzOCgoKIiIiqqqpnZ2dbW1u2trZxcXFHR0eZmZkoKCgVFRV8fHxPT0+QkJA02F9hAAACq0lEQVR4nO3c63aqMBCGYQQ8cEaUakGl93+V1VpX2x/ksPaPybDf5wpmVsSE5AtRBAAAAAAAAAAAgAAUdRywunDvpNqV78NlE6zL8F7uKrde0kO+Cl5+SF166QfpQt0Mvb2X8SpdpavraB2XvXSN7vaWsYkz6Qp9ZLGpl+YoXZ+fY2MamI10eX42hqGpSunqfJXz003xJl2cr7f5tUCiYLb8K09mm6mla/NXzzaTSpfmb35Rs6iRSS7Stfm6zD8zi/o3W9Q8E8VqlsxPV9PirDlIl+fnYFqbRamuVbPlbbNfS1fobm1716xKNY/N1fT0f3ezky7SldMGTXOSLtPFyfjs/1LcAt8JuN48tgHvv7ZiG6zCcQMQAAAAAAAAwLyq3gWs9tkFjNsp6/JgddnUGvNMvxSZgjjQJnPabVZzSFvae1GUODtax0XNwdnj6Mzcy5IOaBd1dB4rOmt+WBNrDBWxxmARawyVIdbYSdfmqzPEGlvp4ny1hlhjL12cr97wmpYqi89eTIszdVdOjO/PtZILZ0/D/H/Zl17T+4z1Ct0oXaI76wW6KDormWy6s72X+2xzUtBOd3LNAqbHdhqyYA1Te3S6P/ut2qbSt7HnpVtyjQAAAAAAAMA/a5I0WInrhfOvRurgzzbb2q2hajtJl+pictmjbdQc0vbWwWnGwL9r8GM/WrqpegXJ2ZeN6eD8LlZwzvSjM3+t8SZdn5+bMdYoXZ0vU6xR0VHzkynWqOKLM78ZjmkTZeHZ1WpNrDFU/0mscatqynzotrPNLCrWGKlZMb+YQlpLutgQVR/S5fn5MMcaVbxlvkyWWONZ0/uMNT6n59uT1i9PPsZGyS9tcoo1JqOCubMb55eYf6Xnw5Svg5VPh7NPrLEpkoAVPluaAAAAAAAAAAAAYfkE1AdllFVOdrYAAAAASUVORK5CYII="
          alt="menu"
          className="h-8 mt-4 ml-6 cursor-pointer transition-transform duration-1000 ease-in-out transform hover:scale-125"
          onClick={() => dispatch(toggleMenu())}
        />

        <a href="/">
          <img
           src='https://img.icons8.com/?size=160&id=DuVwqc97StLu&format=png'  
            alt="Logo"
            className="h-16"
          />
        </a>
      </div>
      <div className="col-span-10 px-10 flex items-center lg:justify-end ">
      <Location />
      </div>
    </div>
  )
}

export default Header