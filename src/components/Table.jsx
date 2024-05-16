import React from 'react';
import linkImg from '../assets/link.png';

const Table = () => {

  {/* This is the code to get the data from API */}
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
    <div className="flex justify-center w-full mt-10 pb-20">
      <div className="w-[85%] rounded-xl overflow-hidden shadow-lg">
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
            {/* This is the code to get the data from API */}
            {/* <tbody>
              {data.map((item, index) => (
                <tr key={index} className="text-white h-16">
                  <td className="py-2 px-4">{item.shortLink}</td>
                  <td className="py-2 px-4">{item.originalLink}</td>
                  <td className="py-2 px-4">{item.qrCode}</td>
                  <td className="py-2 px-4">{item.analytics}</td>
                  <td className="py-2 px-4">{item.date}</td>
                </tr>
              ))}
            </tbody> */}
            <tbody>
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
              {/* <tr className="text-white h-16">
                <td className="py-2 px-4 ">Data 1</td>
                <td className="py-2 px-4 ">Data 2</td>
                <td className="py-2 px-4 ">Data 3</td>
                <td className="py-2 px-4 ">Data 2</td>
                <td className="py-2 px-4 ">Data 3</td>
              </tr>
              <tr className="text-white h-16">
                <td className="py-2 px-4 ">Data 1</td>
                <td className="py-2 px-4 ">Data 2</td>
                <td className="py-2 px-4 ">Data 3</td>
                <td className="py-2 px-4 ">Data 2</td>
                <td className="py-2 px-4 ">Data 3</td>
              </tr>
              <tr className="text-white h-16">
                <td className="py-2 px-4 ">Data 1</td>
                <td className="py-2 px-4 ">Data 2</td>
                <td className="py-2 px-4 ">Data 3</td>
                <td className="py-2 px-4 ">Data 2</td>
                <td className="py-2 px-4 ">Data 3</td>
              </tr>
              <tr className="text-white h-16">
                <td className="py-2 px-4 ">Data 1</td>
                <td className="py-2 px-4 ">Data 2</td>
                <td className="py-2 px-4 ">Data 3</td>
                <td className="py-2 px-4 ">Data 2</td>
                <td className="py-2 px-4 ">Data 3</td>
              </tr>
              <tr className="text-white h-16">
                <td className="py-2 px-4 ">Data 1</td>
                <td className="py-2 px-4 ">Data 2</td>
                <td className="py-2 px-4 ">Data 3</td>
                <td className="py-2 px-4 ">Data 2</td>
                <td className="py-2 px-4 ">Data 3</td>
              </tr>
              <tr className="text-white h-16">
                <td className="py-2 px-4 ">Data 4</td>
                <td className="py-2 px-4 ">Data 5</td>
                <td className="py-2 px-4 ">Data 6</td>
                <td className="py-2 px-4 ">Data 5</td>
                <td className="py-2 px-4 ">Data 6</td>
              </tr> */}
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;