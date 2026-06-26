import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image, Maximize2, X, Filter, Sparkles, Eye } from 'lucide-react';

interface GalleryImage {
  id: string;
  title: string;
  category: 'profile' | 'projects' | 'illustration';
  src: string;
  description: string;
  tags: string[];
}

const galleryImages: GalleryImage[] = [
  {
    id: "img-hero",
    title: "Babal's Hero Celebration",
    category: "profile",
    src: "/src/assets/images/babal_cake_hero_1782410382461.jpg",
    description: "Featured on-stage celebration holding a cake. Symbolizes determination, milestones achieved, and looking forward to future achievements in Big Data & Cloud Computing.",
    tags: ["Profile", "Celebration", "Milestone"]
  },
  {
    id: "img-avatar-prof",
    title: "Babal's Professional Profile",
    category: "profile",
    src: "/src/assets/images/babal_avatar_1782410152609.jpg",
    description: "Close-up digital professional portrait. Used for official developer networks, representing solid engineering foundations and academic dedication.",
    tags: ["Profile", "Professional", "Developer"]
  },
  {
    id: "img-watch",
    title: "PRO-LIFETIME Watch E-Commerce",
    category: "projects",
    src: "/src/assets/images/watch_ecommerce_1782360952615.jpg",
    description: "A premium luxury watch collector store interface design. Complete with full catalog filters, visual details, shopping carts, and smooth local states.",
    tags: ["React.js", "Tailwind CSS", "E-Commerce"]
  },
  {
    id: "img-mojito",
    title: "Mojito Shop Showcase",
    category: "projects",
    src: "/src/assets/images/mojito_shop_1782360968662.jpg",
    description: "An energetic mock cocktail bar and beverage ordering system dashboard. Styled with vibrant green highlights, smooth animation loops, and reactive grid layouts.",
    tags: ["React.js", "Motion", "UI/UX"]
  },
  {
    id: "img-dashboard",
    title: "Student Management Portal",
    category: "projects",
    src: "/src/assets/images/student_dashboard_1782360985291.jpg",
    description: "Comprehensive administrative educational platform. Integrates complex relational SQL tables with responsive interactive charts, analytical trackers, and dual modes.",
    tags: ["Node.js", "Express.js", "MySQL", "Charts"]
  },
  {
    id: "img-portfolio",
    title: "Glassmorphic Developer Portfolio",
    category: "projects",
    src: "/src/assets/images/portfolio_mockup_1782361010167.jpg",
    description: "Personal responsive resume site featuring fluid scroll effects, custom particle animations, native print overlays, and clean semantic structural layout.",
    tags: ["Vite", "TypeScript", "Tailwind CSS"]
  },
  {
    id: "img-avatar",
    title: "Developer Graphic Illustration",
    category: "illustration",
    src: "/src/assets/images/developer_avatar_1782360933509.jpg",
    description: "Creative developer workstation vector portrait. Reflects a deep focus on building scalable software architectures and working inside command interfaces.",
    tags: ["Illustration", "Concept Art", "Workspace"]
  }
];

export default function Images() {
  const [filter, setFilter] = useState<'all' | 'profile' | 'projects' | 'illustration'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <section 
      id="images" 
      className="py-24 bg-lux-cream/20 dark:bg-lux-dark/40 border-t border-slate-200/40 dark:border-white/5 relative overflow-hidden transition-colors duration-300"
    >
      {/* Dynamic Background Accents */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-lux-wine/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-lux-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lux-wine/10 dark:bg-lux-gold/10 text-lux-wine dark:text-lux-gold text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <Sparkles size={12} className="animate-pulse" />
            Visual Portfolio
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Visual Showcase & Gallery
          </motion.h2>
          
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-lux-wine to-lux-gold mx-auto rounded-full" />
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 dark:text-slate-350 text-sm sm:text-base leading-relaxed"
          >
            Explore the visual identity of my work, developer avatar assets, and interactive project snapshots.
            Click any item to view high-fidelity details.
          </motion.p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          <button
            id="filter-all"
            onClick={() => setFilter('all')}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer border ${
              filter === 'all'
                ? 'bg-lux-wine border-lux-wine text-white shadow-md shadow-lux-wine/10'
                : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-650 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/10'
            }`}
          >
            <Filter size={12} />
            All Media
          </button>
          <button
            id="filter-profile"
            onClick={() => setFilter('profile')}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer border ${
              filter === 'profile'
                ? 'bg-lux-wine border-lux-wine text-white shadow-md shadow-lux-wine/10'
                : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-650 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/10'
            }`}
          >
            Profile Images
          </button>
          <button
            id="filter-projects"
            onClick={() => setFilter('projects')}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer border ${
              filter === 'projects'
                ? 'bg-lux-wine border-lux-wine text-white shadow-md shadow-lux-wine/10'
                : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-650 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/10'
            }`}
          >
            Project Screenshots
          </button>
          <button
            id="filter-illus"
            onClick={() => setFilter('illustration')}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer border ${
              filter === 'illustration'
                ? 'bg-lux-wine border-lux-wine text-white shadow-md shadow-lux-wine/10'
                : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-650 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/10'
            }`}
          >
            Illustrations
          </button>
        </div>

        {/* Media Bento Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, index) => (
              <motion.div
                layout
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 shadow-lg hover:shadow-xl transition-all hover:scale-[1.01]"
              >
                {/* Image Container with ReferrerPolicy */}
                <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-white/5 relative">
                  <img
                    src={img.src}
                    alt={img.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Glassmorphic Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                    <button
                      id={`zoom-${img.id}`}
                      onClick={() => setSelectedImage(img)}
                      className="p-3 rounded-full bg-white/90 text-slate-900 hover:bg-lux-wine hover:text-white transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-md cursor-pointer"
                      title="Enlarge Image"
                    >
                      <Maximize2 size={16} />
                    </button>
                  </div>

                  {/* Category Pill Tag */}
                  <span className="absolute top-4 left-4 text-[10px] font-bold font-mono tracking-widest uppercase px-2.5 py-1 bg-slate-950/75 border border-white/10 text-lux-gold rounded-full backdrop-blur-md shadow-md z-10">
                    {img.category}
                  </span>
                </div>

                {/* Card Details */}
                <div className="p-5">
                  <h3 className="text-base font-display font-semibold text-slate-900 dark:text-white group-hover:text-lux-wine dark:group-hover:text-lux-gold transition-colors duration-200 flex items-center gap-1.5">
                    <Image size={14} className="text-slate-400 dark:text-slate-500" />
                    {img.title}
                  </h3>
                  
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed font-sans">
                    {img.description}
                  </p>

                  {/* Technology/Tags list */}
                  <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-white/5">
                    {img.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono font-medium text-slate-500 dark:text-slate-450 bg-slate-50 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 px-2 py-0.5 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Full-Screen Lightbox Modal Component */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button
              id="close-lightbox"
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-105 border border-white/10 cursor-pointer transition-all z-110"
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="relative max-w-4xl w-full bg-white dark:bg-lux-dark rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-white/10 flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Media Container */}
              <div className="flex-1 max-h-[50vh] md:max-h-[75vh] bg-slate-950 flex items-center justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain max-h-[50vh] md:max-h-[75vh]"
                />
              </div>

              {/* Sidebar metadata */}
              <div className="w-full md:w-80 p-6 md:p-8 flex flex-col justify-between bg-white dark:bg-lux-dark text-slate-900 dark:text-slate-100 border-t md:border-t-0 md:border-l border-slate-200 dark:border-white/10">
                <div className="space-y-4">
                  <span className="inline-flex text-[9px] font-bold font-mono tracking-widest uppercase px-2.5 py-1 bg-lux-wine/10 dark:bg-lux-gold/10 text-lux-wine dark:text-lux-gold rounded-full">
                    {selectedImage.category}
                  </span>
                  
                  <h3 className="text-xl font-display font-bold leading-tight">
                    {selectedImage.title}
                  </h3>
                  
                  <p className="text-xs text-slate-600 dark:text-slate-350 leading-relaxed font-sans pt-2">
                    {selectedImage.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-white/5">
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono uppercase tracking-wider block mb-2">Media Tags</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedImage.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono font-medium text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 px-2 py-0.5 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
