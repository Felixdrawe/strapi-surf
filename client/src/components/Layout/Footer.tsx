import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const navItems = [
    { display: 'the camp', slug: '/' },
    { display: 'the experience', slug: '/experience' },
    { display: 'the blog', slug: '/blog' },
    { display: 'the events', slug: '/events' },
  ];
  const policies = [
    { display: 'Imprint', slug: '/imprint' },
    { display: 'Terms of Service', slug: '/terms' },
    { display: 'Data Protection', slug: '/data-protection' },
  ];
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <Image
          className="footer__logo footer__logo--white"
          src="/assets/logo.svg"
          alt="Logo"
          width={50}
          height={50}
        />
        <ul className="footer__links">
          {navItems.map((item) => (
            <li key={item.slug}>
              <Link href={item.slug}>
                <h5>{item.display}</h5>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="footer__policies">
        <ul className="footer__policies-nav">
          {policies.map((policy) => (
            <li key={policy.slug}>
              <Link href={policy.slug}>{policy.display}</Link>
            </li>
          ))}
        </ul>
        <p>&copy; {new Date().getFullYear()} Felix Surfcamp. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
