import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiGoogleappsscript,
  SiPython,
  SiPhp,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiPrisma,
  SiVercel,
  SiNodedotjs,
  SiMysql,
  SiFirebase,
  SiGithub,
  SiPlanetscale,
} from "@icons-pack/react-simple-icons";

const svgClassName = "w-16 h-16";

export const IconSauce = {
  PGLanguage: {
    title: "プログラミング言語",
    icon: {
      TypeScript: {
        iconName: "TypeScript",
        src: "/devIcons/typescript-icon.svg",
        svg: <SiTypescript className={svgClassName} />,
        main: true,
      },
      JavaScript: {
        iconName: "JavaScript",
        src: "/devIcons/javascript.svg",
        svg: <SiJavascript className={svgClassName} />,
        main: true,
      },
      HTML5: {
        iconName: "HTML5",
        src: "/devIcons/html-5.svg",
        svg: <SiHtml5 className={svgClassName} />,
        main: true,
      },
      CSS3: {
        iconName: "CSS3",
        src: "/devIcons/css-3.svg",
        svg: <SiCss3 className={svgClassName} />,
        main: true,
      },
      GoogleAppsScript: {
        iconName: "GAS",
        src: "/devIcons/gas-icon.svg",
        svg: <SiGoogleappsscript className={svgClassName} />,
        main: true,
      },
      Python: {
        iconName: "Python",
        src: "/devIcons/python.svg",
        svg: <SiPython className={svgClassName} />,
        main: false,
      },
      PHP: {
        iconName: "PHP",
        src: "/devIcons/php.svg",
        svg: <SiPhp className={svgClassName} />,
        main: false,
      },
    },
  },
  Frontend: {
    title: "フロントエンド",
    icon: {
      Nextjs: {
        iconName: "Next.js",
        src: "/devIcons/nextjs-icon.svg",
        svg: <SiNextdotjs className={svgClassName} />,
        main: true,
      },
      React: {
        iconName: "React",
        src: "/devIcons/react.svg",
        svg: <SiReact className={svgClassName} />,
        main: true,
      },
      Jotai: {
        iconName: "Jotai",
        src: "/devIcons/jotai-icon.svg",
        svg: null,
        main: true,
      },
      TailwindCSS: {
        iconName: "Tailwind-CSS",
        src: "/devIcons/tailwindcss-icon.svg",
        svg: <SiTailwindcss className={svgClassName} />,
        main: true,
      },
      Bootstrap: {
        iconName: "Bootstrap",
        src: "/devIcons/bootstrap.svg",
        svg: <SiBootstrap className={svgClassName} />,
        main: true,
      },
    },
  },
  BackendDBCloud: {
    title: "バックエンド, データベース & クラウド",
    icon: {
      Prisma: {
        iconName: "Prisma",
        src: "/devIcons/prisma.svg",
        svg: <SiPrisma className={svgClassName} />,
        main: true,
      },
      PlanetScale: {
        iconName: "PlanetScale",
        src: "/devIcons/planetscale-logo.svg",
        svg: <SiPlanetscale className={svgClassName} />,
        main: true,
      },
      Vercel: {
        iconName: "Vercel",
        src: "/devIcons/vercel-icon.svg",
        svg: <SiVercel className={svgClassName} />,
        main: true,
      },
      CloudRun: {
        iconName: "Cloud Run",
        src: "/devIcons/cloud_run.svg",
        svg: null,
        main: true,
      },
      Nodejs: {
        iconName: "Node.js",
        src: "/devIcons/nodejs-icon.svg",
        svg: <SiNodedotjs className={svgClassName} />,
        main: false,
      },
      MySQL: {
        iconName: "MySQL",
        src: "/devIcons/mysql-icon.svg",
        svg: <SiMysql className={svgClassName} />,
        main: false,
      },
      Firebase: {
        iconName: "Firebase",
        src: "/devIcons/firebase.svg",
        svg: <SiFirebase className={svgClassName} />,
        main: false,
      },
      Github: {
        iconName: "Github",
        src: "/devIcons/github-mark.svg",
        svg: <SiGithub className={svgClassName} />,
        main: false,
      },
    },
  },
};
