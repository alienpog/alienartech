"use client"
import Image from "next/image"
import HeaderSection from "./HeaderSection"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { fadeIn } from "../variants"
import { projectHighlight } from "@/lib/data"
import ProjectDemo from "./ProjectDemo"

function ProjectHighlights() {

  const [activeProject, setActiveProject] = useState(0)
  const [expanded, setExpanded] = useState(false)

  const projectSectionRef = useRef(null)

  const project = projectHighlight[activeProject]

  const handleProjectChange = (index) => {

    if (index === activeProject) return

    setActiveProject(index)

    setExpanded(false)

    projectSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }

  return (
    <>
      <div id="projects"></div>

      <div className="mt-24 sm:mt-48">

        <div id="projects" ref={projectSectionRef}></div>

        <HeaderSection
          title="Project Highlights"
          color="#322020"
          className="space-y-3 w-full text-center"
          content="Here are a few projects that embody my approach and expertise:"
        />

        <div className="space-y-12 sm:space-y-24">

          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >

            <h2
              style={{ color: project.color }}
              className="font-light text-5xl w-full text-center my-12"
            >
              PROJECT {project.project}
            </h2>

            {/* Content Container */}

            <div className="relative max-w-7xl mx-auto">

              <div
                className={`transition-all duration-500 overflow-hidden
                ${expanded ? "max-h-[5000px]" : "max-h-[1200px] sm:max-h-[950px]"}`}
              >
                <ProjectDemo project={project} />
              </div>

              {/* Gradient Fade */}

              {!expanded && (
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent flex items-end justify-center pb-6">

                  <button
                    onClick={() => setExpanded(true)}
                    className="px-6 py-2 rounded-lg bg-gradient-to-br from-[#FCE4E5] to-[#ddb2f3] text-[#322020] text-sm shadow-lg hover:scale-105 shadow-[#E9DBF0] transition all ease-in-out duration-500"
                  >
                    Read Full Project
                  </button>

                </div>
              )}

              {/* Collapse Button */}

              {/* {expanded && (
                <div className="flex justify-center mt-6">

                  <button
                    onClick={() => setExpanded(false)}
                    className="px-6 py-2 rounded-full border text-sm hover:bg-gray-100 transition"
                  >
                    Collapse
                  </button>

                </div>
              )} */}

            </div>


            {/* Project Buttons */}

            <div className="flex justify-center gap-6 mt-14">

              {projectHighlight.map((item, index) => (

                <button
                  key={item.id}
                  onClick={() => handleProjectChange(index)}
                  className={`px-2 py-2 rounded-lg transition

                  ${activeProject === index
                      ? "bg-gradient-to-br from-[#FCE4E5] to-[#E9DBF0]"
                      : "hover:scale-110 hover:opacity-80 hover:shadow-lg hover:shadow-[#E9DBF0] transform all ease-in-out duration-500 cursor-pointer animate-pulse"}

                  `}
                >

                  <Image
                    src={item.icon}
                    width={172}
                    height={172}
                    alt="icon"
                    className="w-[48px] object-contain"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..." 
                  />

                </button>

              ))}

            </div>

          </motion.div>

        </div>

      </div>
    </>
  )
}

export default ProjectHighlights








{/*      
   <AnimatePresence mode="wait">

          <motion.div
            key={activeProject}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-5xl text-center my-12">
              {project.name}
            </h2>

            <ProjectDemo project={project} />

          </motion.div>

        </AnimatePresence> */}




