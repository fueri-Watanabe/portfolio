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
  SiShadcnui,
  SiGooglecloud,
  SiVisualstudiocode,
  SiGooglegemini,
} from "@icons-pack/react-simple-icons";

const svgClassName = "w-14 h-14 drop-shadow-lg";

export const IconSauce = {
  PGLanguage: {
    title: "プログラミング言語",
    icon: {
      TypeScript: {
        iconName: "TypeScript",
        svg: <SiTypescript className={svgClassName} />,
        display: true,
      },
      JavaScript: {
        iconName: "JavaScript",
        svg: <SiJavascript className={svgClassName} />,
        display: true,
      },
      HTML5: {
        iconName: "HTML5",
        svg: <SiHtml5 className={svgClassName} />,
        display: true,
      },
      CSS3: {
        iconName: "CSS3",
        svg: <SiCss3 className={svgClassName} />,
        display: true,
      },
      GoogleAppsScript: {
        iconName: "GoogleAppsScript",
        svg: <SiGoogleappsscript className={svgClassName} />,
        display: true,
      },
      Python: {
        iconName: "Python",
        svg: <SiPython className={svgClassName} />,
        display: false,
      },
      PHP: {
        iconName: "PHP",
        svg: <SiPhp className={svgClassName} />,
        display: false,
      },
    },
  },
  Frontend: {
    title: "フロントエンド",
    icon: {
      Nextjs: {
        iconName: "Next.js",
        svg: <SiNextdotjs className={svgClassName} />,
        display: true,
      },
      React: {
        iconName: "React",
        svg: <SiReact className={svgClassName} />,
        display: true,
      },
      TailwindCSS: {
        iconName: "Tailwind-CSS",
        svg: <SiTailwindcss className={svgClassName} />,
        display: true,
      },
      shadcnUi: {
        iconName: "shadcn/ui",
        svg: <SiShadcnui className={svgClassName} />,
        display: true,
      },
      Bootstrap: {
        iconName: "Bootstrap",
        svg: <SiBootstrap className={svgClassName} />,
        display: true,
      },
    },
  },
  BackendDBCloud: {
    title: "バックエンド, データベース, クラウド & ツール",
    icon: {
      Prisma: {
        iconName: "Prisma",
        svg: <SiPrisma className={svgClassName} />,
        display: true,
      },
      PlanetScale: {
        iconName: "PlanetScale",
        svg: <SiPlanetscale className={svgClassName} />,
        display: true,
      },
      Vercel: {
        iconName: "Vercel",
        svg: <SiVercel className={svgClassName} />,
        display: true,
      },
      GoogleCloud: {
        iconName: "GoogleCloud",
        svg: <SiGooglecloud className={svgClassName} />,
        display: true,
      },
      Nodejs: {
        iconName: "Node.js",
        svg: <SiNodedotjs className={svgClassName} />,
        display: false,
      },
      MySQL: {
        iconName: "MySQL",
        svg: <SiMysql className={svgClassName} />,
        display: false,
      },
      Firebase: {
        iconName: "Firebase",
        svg: <SiFirebase className={svgClassName} />,
        display: true,
      },
      Github: {
        iconName: "Github",
        svg: <SiGithub className={svgClassName} />,
        display: true,
      },
      VSCode: {
        iconName: "VSCode",
        svg: <SiVisualstudiocode className={svgClassName} />,
        display: true,
      },
      Geimini: {
        iconName: "Gemini",
        svg: <SiGooglegemini className={svgClassName} />,
        display: true,
      },
    },
  },
};
