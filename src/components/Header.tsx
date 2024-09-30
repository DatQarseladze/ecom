'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Menu } from '@headlessui/react';
import { FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { TextField, IconButton, Button, Switch } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/slices/themeSlice';
import { RootState } from '../store';

export default function Header() {
  const theme = useSelector((state: RootState) => state.theme.value);

  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <header className="bg-[#7787b5] shadow-sm">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image
            src="/impex.png"
            alt="PSP"
            height={50}
            width={50}
            className="rounded-[50%]"
          />

          <div className="flex-grow max-w-md">
            <TextField
              fullWidth
              variant="outlined"
              placeholder="ძიება"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                ),
              }}
            />
          </div>
        </div>

        <div className="flex items-center space-x-6">
          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 ">
            <div className="text-[#231444]">კატეგორიები</div>
            <div className="text-[#231444]">მედიკამენტები</div>
            <div className="text-[#231444]">კოსმეტიკა</div>
            <div className="text-[#231444]">დედა & ბავშვი</div>
            <Button href="#" variant="text" color="secondary">
              BLOG
            </Button>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Switch checked={theme === 'dark'} onChange={handleTheme} />
            <IconButton color="inherit" className="text-gray-500">
              <FaHeart />
            </IconButton>
            <IconButton
              onClick={() => setOpen(true)}
              color="inherit"
              className="text-gray-500"
            >
              <FaUser />
            </IconButton>
            <IconButton color="inherit" className="text-gray-500">
              <FaShoppingCart />
            </IconButton>
          </div>
          <div className="lg:hidden">
            <Menu>
              <Menu.Button className="p-2 text-gray-500 focus:outline-none">
                ☰
              </Menu.Button>
              <Menu.Items className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`block px-4 py-2 ${active ? 'bg-gray-100' : 'bg-gray-500'}`}
                    >
                      კატეგორიები
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`block px-4 py-2 ${active ? 'bg-gray-100' : ''}`}
                    >
                      მედიკამენტები
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`block px-4 py-2 ${active ? 'bg-gray-100' : ''}`}
                    >
                      კოსმეტიკა
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`block px-4 py-2 ${active ? 'bg-gray-100' : ''}`}
                    >
                      დედა & ბავშვი
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`block px-4 py-2 ${active ? 'bg-gray-100' : ''} text-pink-500`}
                    >
                      BLOG
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="w-[400px] h-[400px] transform bg-[#fff] translate-x-[-50%] translate-y-[-50%] absolute rounded-[12px]  top-[50%] left-[50%] ">
          <div className="text-black text-center">Login Modal</div>
        </div>
      </Modal>
    </header>
  );
}
