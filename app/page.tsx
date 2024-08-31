"use client";

import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Code,
  Briefcase,
  Cpu,
  Send,
  Terminal,
  ExternalLink,
} from "lucide-react";
import { FaPython, FaDatabase, FaGit, FaDocker, FaLinux } from "react-icons/fa";
import { DiUbuntu } from "react-icons/di";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TypedComponent from "./TypedComponent";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Define types for skills and projects
type Skill = {
  name: string;
  icon: React.ElementType;
};

type Project = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  gif: string;
};

const skills: Skill[] = [
  { name: "Python", icon: FaPython },
  { name: "Git", icon: FaGit },
  { name: "C", icon: Code },
  { name: "Docker", icon: FaDocker },
  { name: "Shell", icon: FaLinux },
  { name: "Ubuntu", icon: DiUbuntu },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const projects: Project[] = [
  {
    title: "Tess Dev",
    description:
      "A personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Features a responsive design, animated transitions, and showcases projects, skills, and contact information.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/recule556688/portfolio",
    gif: "/tessdev.gif?height=300&width=400",
  },
  {
    title: "GlobalSort GUI",
    description:
      "Python-based utility tool to organize files in directories. Offers features like sorting files by type, customizable folders, and extensions, all within a user-friendly GUI.",
    technologies: ["Python", "Pyinstaller", "PyQt"],
    link: "https://github.com/recule556688/GlobalSort_GUI",
    gif: "/GlobalSort.gif?height=300&width=400",
  },
  {
    title: "VALORANT Instalocker",
    description:
      "A VALORANT Instalocker with a clean GUI that automatically selects agents using the VALORANT API via valclient. Features agent selection, API error handling, and customization options for agent banners and previews.",
    technologies: ["Python", "VALORANT API", "valclient", "GUI"],
    link: "https://github.com/recule556688/VALORANT-Instalocker",
    gif: "/valorant.gif?height=300&width=400",
  },
  {
    title: "Discord Bot Private",
    description:
      "A custom Discord bot designed to automate tasks, moderate servers, and provide entertainment features. Built using Python and the discord.py library with slash commands, Control by API of Minecraft Servers, and a lot more.",
    technologies: ["Python", "discord.py", "API integration", "Slash commands"],
    link: "https://github.com/recule556688/Discord_Bot_Private",
    gif: "/discord.gif?height=300&width=400",
  },
];

// Define props type for ProjectCard
type ProjectCardProps = {
  project: Project;
  isReversed: boolean;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isReversed }) => {
  return (
    <motion.div
      className="flex flex-col lg:flex-row items-center gap-12 mb-24"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        className={`w-full lg:w-1/2 bg-gray-800 border-gray-700 overflow-hidden flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 ${
          isReversed ? "lg:order-2" : ""
        }`}
      >
        <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 p-6">
          <CardTitle className="text-3xl font-bold text-white">
            {project.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-between p-6">
          <div>
            <CardDescription className="text-gray-300 mb-6 text-lg leading-relaxed">
              {project.description}
            </CardDescription>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-700 text-purple-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="flex items-center justify-center space-x-2 py-4 px-6 text-lg bg-purple-600 hover:bg-purple-700 text-white border-none transition-all duration-300 transform hover:scale-105"
              >
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
      <motion.div
        className={`w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg ${
          isReversed ? "lg:order-1" : ""
        }`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src={project.gif}
          alt={`${project.title} demonstration`}
          width={600}
          height={400}
          layout="responsive"
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </motion.div>
    </motion.div>
  );
};

const AlternatingProjects: React.FC = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.title}
          project={project}
          isReversed={index % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const contactRef = useRef<HTMLElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const id = target.getAttribute("href")?.slice(1);
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    };
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleScroll);
    });
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-purple-500 z-50"
        style={{ scaleX }}
      />
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="px-4 lg:px-6 h-16 flex items-center bg-gray-800 fixed w-full z-40 backdrop-blur-sm bg-opacity-80"
      >
        <Link className="flex items-center justify-center" href="#">
          <Code className="h-6 w-6 text-purple-400" />
          <span className="ml-2 text-xl font-bold">Tess Dev</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:text-purple-400 transition-colors"
            href="#projects"
          >
            Projects
          </Link>
          <Link
            className="text-sm font-medium hover:text-purple-400 transition-colors"
            href="#skills"
          >
            Skills
          </Link>
          <Link
            className="text-sm font-medium hover:text-purple-400 transition-colors"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
      </motion.header>
      <main className="flex-1 pt-16">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-purple-900 via-gray-900 to-gray-800">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container px-4 md:px-6 mx-auto"
          >
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Hi, I'm Karma
                </h1>

                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  <TypedComponent
                    strings={[
                        "I use Arch BTW 😎.",
                        "An Engineer student in Epitech at Lyon in France, I'm beginning so be kind with me 😋.",
                        "I'm a passionate developer who loves to learn new things and work on exciting projects.",
                        "I'm currently learning about web development.",
                    ]}
                    typeSpeed={30}
                    backSpeed={20}
                    loop={true}
                  />
                </p>
              </div>
              <div className="space-x-4">
                <Button
                  onClick={scrollToContact}
                  className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Get in touch
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </section>
        <section
          id="projects"
          className="w-full py-24 md:py-32 lg:py-48 bg-gradient-to-b from-gray-900 to-gray-800"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-center mb-24 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            >
              My Projects
            </motion.h2>
            <AlternatingProjects />
          </div>
        </section>
        <section
          id="skills"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 to-gray-800"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            >
              <Cpu className="inline-block mr-2 h-10 w-10 text-purple-400" />
              Skills
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              className="grid gap-4 md:grid-cols-3 lg:grid-cols-3"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="flex items-center justify-center p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <skill.icon className="h-6 w-6 mr-2 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  <span className="text-lg font-semibold group-hover:text-purple-300 transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        <section
          id="contact"
          ref={contactRef}
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-800"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            >
              Get in Touch
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center space-x-4"
            >
              <Link
                href="https://github.com/recule556688"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-gray-700 hover:bg-gray-600 text-white border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="mailto:ledombre@gmail.com">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-gray-700 hover:bg-gray-600 text-white border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-700 bg-gray-800"
      >
        <p className="text-xs text-gray-400">
          © 2024 Tess Corp. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-gray-300 transition-colors"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-gray-300 transition-colors"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </motion.footer>
    </div>
  );
}
