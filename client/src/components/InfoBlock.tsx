import Link from 'next/link';
import Image from 'next/image';

type InfoBlockProps = {
  theme: string;
  reversed?: boolean;
  image: {
    url: string;
    alternativeText?: string;
  };
  headline: string;
  content: string;
  cta?: {
    href: string;
    text: string;
    isExternal?: boolean;
  };
};

export function InfoBlock({
  theme,
  reversed,
  image,
  headline,
  content,
  cta,
}: Readonly<InfoBlockProps>) {
  return (
    <section className={`info info--${theme} ${reversed && 'info--reversed'}`}>
      <Image
        src={image.url}
        alt={image.alternativeText || 'No alternative text provided'}
        height={500}
        width={600}
        className="info__image"
      />
      <div className="info__text">
        <h2 className="info__headline">{headline}</h2>
        <p className="info__content">{content}</p>
        {/* Call to Action Button */}
        {cta && (
          <Link href={cta.href} target={cta.isExternal ? '_blank' : '_self'}>
            <button className={`btn btn--medium btn--${theme}`}>{cta.text}</button>
          </Link>
        )}
      </div>
    </section>
  );
}
