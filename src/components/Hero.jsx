import React, { useState } from 'react'
import linkImg from '../assets/link.png';
import toast from 'react-hot-toast';
import QRCode from 'qrcode.react';
import QRCodeCanvas from 'qrcode.react';

const Hero = () => {

  const [mainLink, setMainLink] = useState('');
  const [suffix, setSuffix] = useState('');
  const [shortenedLinks, setShortenedLinks] = useState([]);

  const handleMainLinkChange = (e) => {
    setMainLink(e.target.value);
  };

  const handleSuffixChange = (e) => {
    setSuffix(e.target.value);
  };

  const handleShortenClick = async () => {
    if (!mainLink) {
      toast.error('Please enter a link to shorten.');
      return;
    }

    try {
      const requestBody = { url: mainLink };
      if (suffix) {
        requestBody.suffix = suffix;
      }

      const response = await fetch('http://localhost:8080/links', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const data = await response.json();
        const { shortid, url } = data;

        // Create a new link object and add it to the shortenedLinks state
        const newLink = {
          shortenedLink: `localhost:8080/links/${shortid}`, // Replace 'linkify.club' with your domain
          originalLink: url,
          qrCode: 'QR Code', // Replace with your QR code data
          analytics: 'Analytics', // Replace with your analytics data
          date: new Date().toLocaleDateString(),
        };
        setShortenedLinks([...shortenedLinks, newLink]);
        toast.success('Row created successfully!');
      } else {
        console.error('Error shortening the link:', response.status);
      }
    } catch (error) {
      console.error('Error shortening the link:', error);
    }
  };

  const generateQRCode = (shortenedLink) => {
    const qrCodeUrl = `https://localhost:8080/${shortenedLink}`;
    return (
      <QRCodeCanvas
        value={qrCodeUrl}
        size={64}
        bgColor="#ffffff"
        fgColor="#000000"
        level="L"
        includeMargin={true}
      />
    );
  };

  {/* This is the code to get the data from API */ }
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('/api/data'); // Replace with your API endpoint
  //       const jsonData = await response.json();
  //       setData(jsonData);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);


  return (
    <div className='flex w-[100%] flex-col items-center justify-center mt-16'>
      <div className="flex flex-col text-center">
        <h2 className="gradient-text-2 text-5xl font-[900] font-inter">
          Shorten Your Loooong Links :)
        </h2>
        <p className="text-[#C9CED6] text-[16px] pt-5 pb-5 z-10">Linkify is an efficient and easy-to-use URL shortening service that streamlines your <br /> online experience.</p>
      </div>

      <div className="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-7 pointer-events-none">
          <img src={linkImg} alt="linkImg" className='h-[28px]' />
        </div>
        <input
          type="text"
          name="main-link"
          placeholder='Enter the link here'
          className='h-[70px] w-[800px] rounded-full border-4 bg-[#181e29] border-[#353C4A] pl-20 pr-12 text-white'
          id="main-website"
          value={mainLink}
          onChange={handleMainLinkChange}
        />
        {/* <button
          class="absolute w-[180px] h-[60px] mt-[10px] mr-[10px] inset-y-0 right-0 flex items-center px-4 rounded-full bg-[#144EE3] text-white hover:bg-blue-600 justify-center text-center"
        >
          Shorten Now!
        </button> */}
      </div>

      {/* <h3 className='text-[#C9CED6] text-[16px] pt-6 '>*Optional: Check for the presence of a custom text within the shortened URL </h3> */}
      <div className="flex items-center justify-between w-[800px]">
        <div className="relative mt-5">
          <div class="absolute inset-y-0  left-0 flex items-center pl-7 pointer-events-none">
            <img src={linkImg} alt="linkImg" className='h-[28px]' />
          </div>
          <input
            type="text"
            name="main-link"
            placeholder='Custom suffix (Optional)'
            className='h-[70px] w-[600px] rounded-full border-4 bg-[#181e29] border-[#353C4A] pl-20 pr-12 text-white'
            id="suffix"
            value={suffix}
            onChange={handleSuffixChange}
          />

        </div>
        <div className="mt-2">
          <button
            class=" w-[180px] h-[70px] mt-[10px] mr-[10px] inset-y-0  right-0 flex items-center px-4 bg-[#144EE3] text-white hover:bg-blue-600 justify-center text-center rounded-full border-4 border-[#4564ab]"
            onClick={handleShortenClick}
          >
            Shorten Now!
          </button>
        </div>
      </div>

      <div className="w-[85%] rounded-xl overflow-hidden shadow-lg mt-10 mb-14">
        <div className="backdrop-filter backdrop-blur-lg">
          <table className="w-full border-collapse border border-transparent">
            <thead>
              <tr className="bg-gray-800 text-white h-16 text-left">
                <th className="py-2 px-4 w-[25%]">Short Link</th>
                <th className="py-2 px-4 w-[30%]">Original Link</th>
                <th className="py-2 px-4 w-[10%]">QR Code</th>
                <th className="py-2 px-4 w-[15%]">Analytics</th>
                <th className="py-2 px-4 w-[20%]">Date</th>
              </tr>
            </thead>
            <tbody>
              {shortenedLinks.map((link, index) => (
                <tr key={index} className="text-white h-16">
                  <td className="py-2 px-4">
                    <a href={`https://localhost:8080/links/${link.shortenedLink.split('/')[2]}`} target="_blank" rel="noopener noreferrer" className='hover:text-blue-400 hover:underline'>
                      {link.shortenedLink}
                    </a>
                  </td>
                  <td className="py-2 px-4">
                    <a href={link.originalLink} target="_blank" rel="noopener noreferrer" className='hover:text-blue-400 hover:underline'>
                      {link.originalLink}
                    </a>
                  </td>
                  <td className="py-2 px-4">{generateQRCode(link.shortenedLink.split('/')[2])}</td>
                  <td className="py-2 px-4 flex items-center h-[80px]">
                    {link.analytics} <img src={linkImg} alt="linkImg" className="h-[28px] pl-2" />
                  </td>
                  <td className="py-2 px-4">{link.date}</td>
                </tr>
              ))}
            </tbody>
            {/* <tbody>
              <tr className="text-white h-16">
                <td className="py-2 px-4 ">linkify.club/xyz</td>
                <td className="py-2 px-4 ">www.google.com</td>
                <td className="py-2 px-4 ">Data 3</td>
                <td className="py-2 px-4 flex items-center">Active <img src={linkImg} alt="linkImg" className='h-[28px]' /></td>
                <td className="py-2 px-4 ">16/05/2024</td>
              </tr>
              <tr className="text-white h-16">
                <td className="py-2 px-4 ">linkify.club/abc</td>
                <td className="py-2 px-4 ">www.facebook.com</td>
                <td className="py-2 px-4 ">Data 3</td>
                <td className="py-2 px-4 flex items-center">Active <img src={linkImg} alt="linkImg" className='h-[28px]' /></td>
                <td className="py-2 px-4 ">15/05/2024</td>
              </tr>
              <tr className="text-white h-16">
                <td className="py-2 px-4 ">linkify.club/abc</td>
                <td className="py-2 px-4 ">www.facebook.com</td>
                <td className="py-2 px-4 ">Data 3</td>
                <td className="py-2 px-4 flex items-center">Active <img src={linkImg} alt="linkImg" className='h-[28px]' /></td>
                <td className="py-2 px-4 ">15/05/2024</td>
              </tr>
            </tbody> */}
          </table>
        </div>
      </div>
    </div>
  )
}

export default Hero