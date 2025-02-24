import type { ImageURISource } from "react-native";
import type { SharedValue } from "react-native-reanimated";
import { SpringConfig } from "react-native-reanimated/lib/typescript/reanimated2/animation/springUtils";

export type ImageItemURI = ImageURISource;

export interface GalleryPreviewProps {
  isVisible: boolean;

  /**
   * Function to close the image viewer modal.
   */
  onRequestClose: () => void;

  images: ImageItemURI[];

  /**
   * The initial index of the image to be displayed when the viewer is opened.
   * @default 0
   */
  initialIndex?: number;

  /**
   * The gap between images in the viewer.
   * @default 24
   */
  gap?: number;

  /**
   * The number of images rendered simultaneously for optimization.
   * @default 6
   */
  simultaneousRenderedImages?: number;

  /**
   * Optional header component to be rendered above the image viewer.
   */
  HeaderComponent?: (props: GalleryHeaderProps) => React.ReactNode;

  /**
   * Optional custom component to render each image.
   */
  ImageComponent?: (props: GalleryImageComponentProps) => React.JSX.Element;
  /**
  Spring config
     * @default
      {
        damping: 1000,
        mass: 1,
        stiffness: 250,
        restDisplacementThreshold: 0.02,
        restSpeedThreshold: 4,
      }
     */
  springConfig?: SpringConfig;

  /**
   * The maximum scale of the image.
   * @default 8
   */
  maxScale?: number;
}

export interface GalleryHeaderProps {
  /**
   * Function to close the image viewer.
   */
  onClose: () => void;

  /**
   * The index of the current image being viewed.
   */
  currentImageIndex: number;

  /**
   * The total number of images
   */
  imagesLength: number;
  isFocused: boolean;
}

export interface GalleryItemProps {
  index: number;
  currentIndex: SharedValue<number>;
  item: ImageItemURI;
  isFirst: boolean;
  isLast: boolean;
  rootTranslateX: SharedValue<number>;
  opacity: SharedValue<number>;
  width: number;
  height: number;
  dataLength: number;
  gap: number;
  onClose: () => void;
  setIsFocused: (val: boolean) => void;
  isFocused: boolean;
  ImageComponent: (props: GalleryImageComponentProps) => React.JSX.Element;
  springConfig: SpringConfig;
  maxScale: number;
}

export interface GalleryImageComponentProps {
  source: ImageItemURI;
  /**
   * Function to be called when the image is loaded.
   * @param width - The width of the loaded image.
   * @param height - The height of the loaded image.
   */
  onLoad: (width: number, height: number) => void;
  style: {
    width: number;
    height: number;
  };
}
