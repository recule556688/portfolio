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
} from "lucide-react";
import { FaPython, FaDatabase, FaGit, FaDocker, FaLinux } from "react-icons/fa";
import { DiUbuntu } from "react-icons/di";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const skills = [
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

export default function Portfolio() {
  const [projects] = useState([
    {
      title: "GlobalSort GUI",
      description:
        "GlobalSort is a Python-based utility tool designed to organize files in your computer's directories. It offers features like sorting files by type, customizable folders, and extensions, all within a user-friendly GUI.",
      technologies: "Python, Pyinstaller, PyQt",
      link: "https://github.com/recule556688/GlobalSort_GUI",
    },
    {
      title: "YouTube Downloader",
      description:
        "A Python-based YouTube downloader using the pytube library and tkinter for the GUI. It allows users to download videos from YouTube and view video information such as author, publish date, views, thumbnail, and duration.",
      technologies: "Python, Pytube, Tkinter",
      link: "https://github.com/recule556688/Youtube_Downloader",
    },
    {
      title: "VALORANT Instalocker",
      description:
        "A VALORANT Instalocker with a clean GUI that automatically selects agents using the VALORANT API via valclient. It features agent selection, API error handling, and customization options for agent banners and previews.",
      technologies: "Python, VALORANT API, valclient, GUI",
      link: "https://github.com/recule556688/VALORANT-Instalocker",
    },
  ]);

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
        {" "}
        {/* Added pt-16 to prevent content overlap with header */}
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
                  An Engineer student at Lyon in France , I'm beginning so be
                  kind with me 😋.
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
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-800"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            >
              <Briefcase className="inline-block mr-2 h-10 w-10 text-purple-400" />
              Projects
            </motion.h2>
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-700 border-gray-600 text-white h-full overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <CardHeader className="space-y-4 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform -skew-y-12 group-hover:skew-y-12 transition-all duration-300 opacity-20" />
                      <CardTitle className="text-purple-400 text-2xl relative z-10">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300 relative z-10">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-sm text-gray-400 mb-4">
                        Technologies used: {project.technologies}
                      </p>
                      <Link
                        className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors group"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                        <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
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
          © 2023 Karma. All rights reserved.
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
