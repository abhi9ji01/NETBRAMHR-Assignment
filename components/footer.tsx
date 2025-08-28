import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mx-auto max-w-screen-2xl mt-25 mb-6 text-center text-md text-[#262626] border-t"
      style={{ borderColor: "#D9D9D9" }}
    >
      <div className="mt-6">© Copyright 2025 NetBramha Studio LLP. All Rights Reserved.</div>
      <div className="mt-2 flex items-center justify-center gap-10">
        <a className="underline" href="#">FAQs</a>
        <a className="underline" href="#">Terms and Conditions</a>
        <a className="underline" href="#">Privacy Policy</a>
        <a className="underline" href="#">Raise a Dispute</a>
      </div>
    </motion.div>
  );
}
