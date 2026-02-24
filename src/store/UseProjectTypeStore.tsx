import { create } from "zustand";

interface ProjectProps {
    readonly projectType: 'Jaychis' | 'PortFolio' | '싹둑싹둑' | '중독' | null;
    readonly setProjectType: (newType: 'Jaychis' | 'PortFolio' | '싹둑싹둑' | '중독' | null) => void;
}

const useProjectTypeStore = create<ProjectProps>((set) => ({
    projectType : null,
    setProjectType : (newType) => set({projectType: newType})
  }));

export default useProjectTypeStore