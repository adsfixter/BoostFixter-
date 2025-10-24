import React from 'react'

export default function ServicesCard({ index, service }) {
   
  return (
   <div
              
              className="relative group flex flex-col items-center justify-center h-[450px] px-10 py-12 space-y-4 shadow-sm transition transform hover:-translate-y-2 hover:bg-secondary hover:shadow-lg text-center"
            >
                
              {/* Conditional Borders */}
              {index === 0 && (
                <div className="absolute -top-2 -left-2 w-40 h-40 border-t-8 border-l-8 text-secondary transition-transform duration-300 group-hover:translate-y-[-0px]" />
              )}
              {index === 2 && (
                <div className="absolute -top-2 -right-2 w-40 h-40 border-t-8 border-r-8 text-secondary transition-transform duration-300 group-hover:translate-y-[-0px]" />
              )}
              {index === 3 && (
                <div className="absolute -bottom-6 -left-2 w-40 h-40 border-l-8 border-b-8 text-secondary transition-transform duration-300 group-hover:translate-y-[-1px]" />
              )}
              {index === 5 && (
                <div className="absolute -bottom-6 -right-2 w-40 h-40 border-r-8 border-b-8 text-secondary transition-transform duration-300 group-hover:translate-y-[-1px]" />
              )}

              {/* icon div */}
              <div className="flex justify-center rounded-full w-20 h-20 bg-primary">
                <h1 className=" text-white text-2xl items-center flex">
                  {service.icon}
                </h1>
              </div>
              <h3 className="text-xl font-semibold mb-2 ">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
  )
}
