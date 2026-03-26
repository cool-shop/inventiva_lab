import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { APP_CONFIG } from '../config';

const CategoryHeader = ({ user, onBrandClick }) => {
    return (
        <div className="px-6 pt-12 pb-6 flex justify-between items-center sm:px-12">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 className="text-2xl font-black text-cat-brown sm:text-4xl uppercase tracking-tighter">
                    Hola {user ? user.given_name : ''}👋
                </h2>
                <p className="text-slate-500 text-xs sm:text-lg font-medium opacity-70">Explora nuestro catálogo exclusivo</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 group cursor-pointer"
            >
                {/* <div className="text-right hidden sm:block">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-cat-orange leading-none mb-1">Tu Tienda</p>
                    <p className="text-lg font-black text-cat-brown leading-none">FAVORITA</p>
                </div> */}
                <div
                    onClick={onBrandClick}
                    className="">
                    {/* <ShoppingBag size={28} className="sm:size-[32px]" /> */}
                    <img src={APP_CONFIG.LOGO_SM} alt="Inventiva" className="w-16 h-16 sm:w-16 sm:h-16 rounded-full shadow-xl shadow-cat-orange/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" />
                </div>
            </motion.div>
        </div>
    );
};

export default CategoryHeader;
