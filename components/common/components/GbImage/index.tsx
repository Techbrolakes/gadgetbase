import React from 'react';
import Image from 'next/image';

interface IProps {
    src: string;
    alt: string;
    width: number | string;
    height: number | string;
    className?: string;
    priority?: boolean;
    quality?: 75 | 90 | 100;
}

const GbImage: React.FC<IProps> = ({ src, alt, width, height, className, priority, quality }: IProps) => {
    return (
        <div className="!block">
            <Image
                src={src}
                alt={alt}
                width={+width}
                height={+height}
                className={className}
                priority={priority}
                placeholder="blur"
                blurDataURL="/images/placeholder.png"
                quality={quality}
                style={{
                    height: 'auto',
                    maxWidth: '100%',
                }}
            />
        </div>
    );
};

GbImage.defaultProps = {
    priority: true,
    quality: 100,
};

export default GbImage;
