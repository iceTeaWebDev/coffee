'use client'
import {
  Page,
  Navbar,
  Block,
  Button,
  List,
  ListItem,
  Link,
  BlockTitle,
  ListInput,
  Icon,
  Card,
  Tabbar,
  TabbarLink
} from 'konsta/react';

import {
  Search,
  PersonCircleFill,
  EnvelopeFill,
  Calendar,
  CloudUploadFill,
} from 'framework7-icons/react';
import { MdPerson, MdEmail, MdToday, MdFileUpload } from 'react-icons/md';

import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
export default async function Home() {
  return (
    <Page className=''>
      {/* <Navbar title="My App" /> */}
      <div className='bg-red-600 p-1'>
        <List strongIos insetIos className='p-0' margin='my-2'>
          <ListInput media={<Search />} />
        </List>
      </div>
      <Block
        strongIos
        outlineIos
        className="flex space-x-4 rtl:space-x-reverse"
      >

      </Block>
      <div className="grid grid-cols-2 m-1 gap-1">
        <Card className='rounded-none' margin='m-0' contentWrap={false} >
          <div
            className="h-24 flex items-end text-white ios:font-bold bg-cover bg-center material:rounded-xl material:text-[22px]"
            style={{
              backgroundImage:
                'url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)',
            }}
          >
          </div>
          <div className='p-0 line-clamp-1'>
            Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng
          </div>
          <div className='text-xs line-clamp-2 p-0 opacity-60'>
            Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng
          </div>
        </Card>
        <Card className='rounded-none' margin='m-0' contentWrap={false} >
          <div
            className="h-24 flex items-end text-white ios:font-bold bg-cover bg-center material:rounded-xl material:text-[22px]"
            style={{
              backgroundImage:
                'url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)',
            }}
          >
          </div>
          <div className='p-0 line-clamp-1'>
            Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng
          </div>
          <div className='text-xs line-clamp-2 p-0 opacity-60'>
            Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng
          </div>
        </Card>
        <Card className='rounded-none' margin='m-0' contentWrap={false} >
          <div
            className="h-24 flex items-end text-white ios:font-bold bg-cover bg-center material:rounded-xl material:text-[22px]"
            style={{
              backgroundImage:
                'url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)',
            }}
          >
          </div>
          <div className='p-0 line-clamp-1'>
            Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng
          </div>
          <div className='text-xs line-clamp-2 p-0 opacity-60'>
            Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng
          </div>
        </Card>
        <Card className='rounded-none' margin='m-0' contentWrap={false} >
          <div
            className="h-24 flex items-end text-white ios:font-bold bg-cover bg-center material:rounded-xl material:text-[22px]"
            style={{
              backgroundImage:
                'url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)',
            }}
          >
          </div>
          <div className='p-0 line-clamp-1'>
            Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng
          </div>
          <div className='text-xs line-clamp-2 p-0 opacity-60'>
            Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng
          </div>
        </Card>
        <Card className='rounded-none' margin='m-0' contentWrap={false} >
          <div
            className="h-24 flex items-end text-white ios:font-bold bg-cover bg-center material:rounded-xl material:text-[22px]"
            style={{
              backgroundImage:
                'url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)',
            }}
          >
          </div>
          <div className='p-0 line-clamp-1'>
            Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng
          </div>
          <div className='text-xs line-clamp-2 p-0 opacity-60'>
            Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng
          </div>
        </Card>
        <Card className='rounded-none' margin='m-0' contentWrap={false} >
          <div
            className="h-24 flex items-end text-white ios:font-bold bg-cover bg-center material:rounded-xl material:text-[22px]"
            style={{
              backgroundImage:
                'url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)',
            }}
          >
          </div>
          <div className='p-0 line-clamp-1'>
            Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng
          </div>
          <div className='text-xs line-clamp-2 p-0 opacity-60'>
            Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng
          </div>
        </Card>
        <Card className='rounded-none' margin='m-0' contentWrap={false} >
          <div
            className="h-24 flex items-end text-white ios:font-bold bg-cover bg-center material:rounded-xl material:text-[22px]"
            style={{
              backgroundImage:
                'url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)',
            }}
          >
          </div>
          <div className='p-0 line-clamp-1'>
            Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng
          </div>
          <div className='text-xs line-clamp-2 p-0 opacity-60'>
            Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng
          </div>
        </Card>
        <Card className='rounded-none' margin='m-0' contentWrap={false} >
          <div
            className="h-24 flex items-end text-white ios:font-bold bg-cover bg-center material:rounded-xl material:text-[22px]"
            style={{
              backgroundImage:
                'url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)',
            }}
          >
          </div>
          <div className='p-0 line-clamp-1'>
            Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng
          </div>
          <div className='text-xs line-clamp-2 p-0 opacity-60'>
            Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng
          </div>
        </Card>
        <Card className='rounded-none' margin='m-0' contentWrap={false} >
          <div
            className="h-24 flex items-end text-white ios:font-bold bg-cover bg-center material:rounded-xl material:text-[22px]"
            style={{
              backgroundImage:
                'url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)',
            }}
          >
          </div>
          <div className='p-0 line-clamp-1'>
            Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng
          </div>
          <div className='text-xs line-clamp-2 p-0 opacity-60'>
            Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng
          </div>
        </Card>
        <Card className='rounded-none' margin='m-0' contentWrap={false} >
          <div
            className="h-24 flex items-end text-white ios:font-bold bg-cover bg-center material:rounded-xl material:text-[22px]"
            style={{
              backgroundImage:
                'url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)',
            }}
          >
          </div>
          <div className='p-0 line-clamp-1'>
            Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng
          </div>
          <div className='text-xs line-clamp-2 p-0 opacity-60'>
            Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng
          </div>
        </Card>
        <Card className='rounded-none' margin='m-0' contentWrap={false} >
          <div
            className="h-24 flex items-end text-white ios:font-bold bg-cover bg-center material:rounded-xl material:text-[22px]"
            style={{
              backgroundImage:
                'url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)',
            }}
          >
          </div>
          <div className='p-0 line-clamp-1'>
            Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng
          </div>
          <div className='text-xs line-clamp-2 p-0 opacity-60'>
            Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng
          </div>
        </Card>
        <Card className='rounded-none' margin='m-0' contentWrap={false} >
          <div
            className="h-24 flex items-end text-white ios:font-bold bg-cover bg-center material:rounded-xl material:text-[22px]"
            style={{
              backgroundImage:
                'url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)',
            }}
          >
          </div>
          <div className='p-0 line-clamp-1'>
            Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng
          </div>
          <div className='text-xs line-clamp-2 p-0 opacity-60'>
            Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng Vàng Khẻ Quán - Ăn Vặt & Lẩu $ Nướng
          </div>
        </Card>
      </div>
      <Tabbar labels icons className="left-0 bottom-0 fixed">
        <TabbarLink
          active
          icon={
            <Icon
              ios={<EnvelopeFill className="w-7 h-7" />}
              material={<MdEmail className="w-6 h-6" />}
              badge="5"
              badgeColors={{ bg: 'bg-green-500' }}
            />
          }
          label="Inbox"
        />
        <TabbarLink
          icon={
            <Icon
              ios={<Calendar className="w-7 h-7" />}
              material={<MdToday className="w-6 h-6" />}
              badge="7"
              badgeColors={{ bg: 'bg-red-500' }}
            />
          }
          label="Calendar"
        />
        <TabbarLink
          icon={
            <Icon
              ios={<CloudUploadFill className="w-7 h-7" />}
              material={<MdFileUpload className="w-6 h-6" />}
              badge="1"
              badgeColors={{ bg: 'bg-red-500' }}
            />
          }
          label="Upload"
        />
      </Tabbar>
    </Page>
  )
}
