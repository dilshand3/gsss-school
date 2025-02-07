import { create } from "zustand";

const useAuth = create((set, get) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  closeMenu: () => set({ isOpen: false }),

  currentIndex: 0,
  images: ["/untracke/img1.jpg", "/untracke/img2.jpg","/untracke/img1.jpg","/untracke/img1.jpg"], 
  nextSlide: () => {
    const { currentIndex, images } = get();
    set({ currentIndex: (currentIndex + 1) % images.length });
  },
  prevSlide: () => {
    const { currentIndex, images } = get();
    set({ currentIndex: (currentIndex - 1 + images.length) % images.length });
  },
}));

export default useAuth;