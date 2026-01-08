import { useState, useMemo } from "react";
import { galleryImages, type GalleryImage } from "../data/galleryImages";
import { ImageCard } from "../components/gallery/ImageCard";
import { ImageModal } from "../components/gallery/ImageModal";
import { FilterBar } from "../components/gallery/FilterBar";
import { Image as ImageIcon } from "lucide-react";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages = useMemo(() => {
    if (activeCategory === "all") {
      return galleryImages;
    }
    return galleryImages.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  const selectedImageIndex = selectedImage
    ? filteredImages.findIndex((img) => img.id === selectedImage.id)
    : -1;

  const handleNext = () => {
    if (selectedImageIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[selectedImageIndex + 1]);
    }
  };

  const handlePrevious = () => {
    if (selectedImageIndex > 0) {
      setSelectedImage(filteredImages[selectedImageIndex - 1]);
    }
  };

  return (
    <div className="min-h-screen bg-primary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, var(--color-accent), var(--dark-accent))' }}
            >
              <ImageIcon style={{ width: "24px", height: "24px", color: "white" }} />
            </div>
            <h1 className="text-4xl font-bold text-primary">
              معرض الصور
            </h1>
          </div>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            صور لمجموعة من الأعمال خلال الشهر السابق{" "}
          </p>
        </div>

        {/* Filter Bar */}
        <FilterBar
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Image Count */}
        <div className="text-center mb-8">
          <p className="text-secondary">
            عرض{" "}
            <span className="font-bold text-accent">{filteredImages.length}</span>{" "}
            صورة
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <ImageCard
              key={image.id}
              image={image}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-secondary rounded-full flex items-center justify-center">
              <ImageIcon style={{ width: "48px", height: "48px" }} className="text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">
              لا توجد صور في هذه الفئة
            </h3>
            <p className="text-secondary">
              جرب تصفية مختلفة لاستكشاف المزيد من الصور
            </p>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          onNext={handleNext}
          onPrevious={handlePrevious}
          hasNext={selectedImageIndex < filteredImages.length - 1}
          hasPrevious={selectedImageIndex > 0}
        />
      )}
    </div>
  );
}
