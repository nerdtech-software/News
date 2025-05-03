// src/components/NewsLayout.tsx



const MumbaiNewsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen w-4xl justify-center  left-96 mt-48 max-w-4xl mx-auto p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-2">
        Home &gt; <span className="text-black font-semibold">Politics</span>
      </div>  

      {/* Main Section */}
      <div className="flex gap-6">
        {/* Left Side - Main News */}
        <div className="flex-[2] space-y-6">
          {/* Section Title */}
          <div className="flex items-center gap-2 border-l-4 border-orange-500 pl-2 text-xl font-bold">
          राजकारण

          </div>

          {/* Big News Card */}
          <div className="bg-white flex rounded-md overflow-hidden shadow w-xl">
            <img
              src="https://images.letsupp.com/wp-content/uploads/2025/04/Maharashtra-Tourism_V_jpg--1280x720-4g.webp"
              alt="Main News"
              className="w-56 h-64 object-fill"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">
                पर्यटकांच्या सुरक्षेसाठी सरकारने उचललं पाऊल; महाराष्ट्र पर्यटन
                सुरक्षा दलाची स्थापना
              </h2>
              <p className="text-gray-600 text-sm mb-2">
                Maharashtra Tourism Security Force ची स्थापना पर्यटकाला चालना
                आणि पर्यटकांच्या सुरक्षिततेला प्राधान्य देण्यासाठी राज्य
                शासनाने...
              </p>
              <span className="text-xs text-gray-400">3 Mins Ago</span>
            </div>
          </div>

          {/* Small News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
            {/* Card 1 */}
            <div className="bg-white flex gap-3 p-3 rounded-md shadow">
              <img
                src="https://images.letsupp.com/wp-content/uploads/2025/04/Maharashtra-Tourism_V_jpg--1280x720-4g.webp"
                className="w-24 h-16 object-cover rounded"
              />
              <div>
                <p className="text-sm font-semibold">
                  मोठी बातमी! 10 लाखांचं प्रकरण अंगावर...
                </p>
                <span className="text-xs text-gray-400">31 Mins Ago</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white flex gap-3 p-3 rounded-md shadow">
              <img
                src="https://images.letsupp.com/wp-content/uploads/2025/04/Maharashtra-Tourism_V_jpg--1280x720-4g.webp"
                className="w-24 h-16 object-cover rounded"
              />
              <div>
                <p className="text-sm font-semibold">
                  ST महामंडळाची आर्थिक स्थिती चिंताजनक...
                </p>
                <span className="text-xs text-gray-400">2 Hours Ago</span>
              </div>
            </div>

            {/* Add more cards as needed */}
          </div>
        </div>

        {/* Right Side - Latest News */}
        <div className="flex-1">
          {/* Section Title */}
          <div className="flex items-center gap-2 border-l-4 border-orange-500 pl-2 text-xl font-bold mb-4">
            ताजी बातमी
          </div>

          {/* Latest News List */}
          <div className="bg-white rounded-md shadow p-4 m-2  space-y-4">
            {/* News Item */}
            <div>
              <p className="text-sm font-semibold">
                शेअर बाजारात तेजी, सेन्सेक्सने 1000 अंकांनी वाढ...
              </p>
              <span className="text-xs text-gray-400">12  00Mins Ago</span>
            </div>

            <div>
              <p className="text-sm font-semibold">
                मुंबई होणार भव ‘वर्ल्ड ऑडिओ क्लिनिकल एंटरटेनमेंट सिटी’...
              </p>
              <span className="text-xs text-gray-400">13 Mins Ago</span>
            </div>

            {/* Add more items here */}
          </div>
        </div>
      </div>
      <div className="bg-white flex gap-3 p-4 rounded-md shadow my-2 w-xl">
        <img
          src="https://images.letsupp.com/wp-content/uploads/2025/04/Maharashtra-Tourism_V_jpg--1280x720-4g.webp"
          className="w-24 h-16 object-cover rounded"
        />
        <div>
          <p className="text-sm font-semibold">
            वडेट्टीवारांच वक्तव्य म्हणजे असंवेदनशील मानसिकतेचा कळस; बावनकुळेंनी
            ‘त्या’ वक्तव्यावरून फटकारलं विजय वडेट्टीवार यांच्या वक्तव्यामुळे
            दहशतवाद्यांचा चेहरा झाकण्याचा, त्यांना संरक्षण देण्याचा किळसवाणा
            प्रयत्न दिसतो. हा केवळ
          </p>
          <span className="text-xs text-gray-400">2 Hours Ago</span>
        </div>
      </div>
      <div className="bg-white flex gap-3 p-4 rounded-md shadow my-2 w-xl">
        <img
          src="https://images.letsupp.com/wp-content/uploads/2025/04/Maharashtra-Tourism_V_jpg--1280x720-4g.webp"
          className="w-24 h-16 object-cover rounded"
        />
        <div>
          <p className="text-sm font-semibold ">
            वडेट्टीवारांच वक्तव्य म्हणजे असंवेदनशील मानसिकतेचा कळस; बावनकुळेंनी
            ‘त्या’ वक्तव्यावरून फटकारलं विजय वडेट्टीवार यांच्या वक्तव्यामुळे
            दहशतवाद्यांचा चेहरा झाकण्याचा, त्यांना संरक्षण देण्याचा किळसवाणा
            प्रयत्न दिसतो. हा केवळ
          </p>
          <span className="text-xs text-gray-400">2 Hours Ago</span>
        </div>
      </div>
    </div>
  );
}

export default MumbaiNewsPage;

