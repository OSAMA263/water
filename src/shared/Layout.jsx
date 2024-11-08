import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function Layout(props) {
  const { children, className = "", title, description, href } = props;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`bg-Abyss py-24 ${className}`}
    >
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={href} />
      </Helmet>
      {children}
    </motion.div>
  );
}
// put the seo stuff here
