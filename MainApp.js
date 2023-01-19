const inforPersonContainer = document.querySelector('.persons-container');
const inforPicture = document.querySelector('.picture');
const inforName = document.querySelector('.name');
const infor = document.querySelector('.infor');

// Dữ liệu ban đầu để xử lý và tác động vào DOM:
const array = [
    {
        picture: 'bill-gates',
        infor: 'William Henry "Bill" Gates III (sinh ngày 28 tháng 10 năm 1955) là một doanh nhân người Mỹ, nhà từ thiện, tác giả và chủ tịch tập đoàn Microsoft, hãng phần mềm mà ông cùng với Paul Allen đã sáng lập ra. Ông luôn có mặt trong danh sách những người giàu nhất trên thế giới. và là người giàu nhất thế giới từ 1995 tới 2014, ngoại trừ tháng 3/2013, 3/2012, tháng 3/2011 (hạng 2) và 2008 khi ông chỉ xếp thứ ba. Tháng 5 năm 2013, Bill Gates đã giành lại ngôi vị người giàu nhất thế giới. Gần đây, ông là người giàu thứ hai thế giới với tổng tài sản 105,3 tỷ đô la Mỹ. Ở Microsoft, Gates làm CEO và kiến trúc sư trưởng phần mềm. Ông là cổ đông cá nhân lớn nhất của Microsoft cho tới tháng 5 năm 2014. Ông cũng là tác giả và đồng tác giả của một số cuốn sách.',
        fullName: 'William Henry "Bill" Gates III',
    },
    {
        picture: 'brendan-eich',
        infor: 'Brendan Eich (sinh ngày 4 tháng 7 năm 1961) là một nhà công nghệ người Mỹ và là cha đẻ của ngôn ngữ lập trình JavaScript. Ông ta cũng là người đồng sáng lập của dự án Mozilla, Mozilla Foundation và Mozilla Corporation, và từng là giám đốc công nghệ của Mozilla Corporation và là giám đốc điều hành trong một thời gian ngắn. Ông ta là CEO của Brave Software.',
        fullName: 'Brendan Eich',
    },
    {
        picture: 'gabe-newell',
        infor: 'Gabe Logan Newell (sinh ngày 3 tháng 11 năm 1962) là nhà đồng sáng lập và là tổng giám đốc điều hành của công ty phát triển trò chơi điện tử và phân phối trực tuyến Valve Corporation. Sau khi bỏ học đại học Harvard, Newell dành 13 năm làm việc cho Microsoft Corporation, cuối cùng trở thành một "Triệu phú Microsoft". Newell đã tự mô tả bản thân là "nhà sản xuất của 3 phiên bản Windows đầu tiên". Nhận cảm hứng từ Michael Abrash, người rời bỏ Microsoft để làm nên tựa trò chơi máy tính Quake ở nhà, Newell và một nhân viên khác từ Microsoft, Mike Harrington, rời khỏi Microsoft để sáng lập nên Valve vào năm 1996. Ông cùng Harrington đã dùng tiền cá nhân để cấp vốn cho Valve suốt thời gian phát triển tựa trò chơi Half-Life.',
        fullName: 'Gabe Logan Newell',
    },
    {
        picture: 'john-resign',
        infor: 'John Resig (sinh ngày 8 tháng 5 năm 1984) là một kỹ sư phần mềm và doanh nhân người Mỹ, được biết đến nhiều nhất với tư cách là người sáng tạo và nhà phát triển chính của thư viện jQuery JavaScript. Tính đến năm 2021, ông là kiến ​​trúc sư phần mềm trưởng tại Học viện Khan.',
        fullName: 'John Resig',
    },
    {
        picture: 'mark-zuckerberg',
        infor: 'Mark Elliot Zuckerberg (sinh ngày 14 tháng 5 năm 1984) là một nhà lập trình máy tính người Mỹ kiêm doanh nhân mảng công nghệ Internet. Anh là nhà đồng sáng lập của Meta (ban đầu tên là Facebook), và hiện đang điều hành công ty này với chức danh chủ tịch kiêm giám đốc điều hành. Zuckerberg cho ra đời Facebook trong phòng ký túc xá của mình tại Đại học Harvard vào ngày 4 tháng 2 năm 2004. Trong quá trình tạo lập, xây dựng và hoàn thiện mạng xã hội này, anh nhận trợ giúp bởi các bạn cùng phòng học và các sinh viên Harvard khác như Eduardo Saverin, Andrew McCollum, Dustin Moskovitz và Chris Hughes.[5] Sau khi thành công trong việc tạo lập và thiết kế, nhóm của anh sau giới thiệu Facebook đến với các trường đại học khác. Từ đó, Facebook đã phát triển nhanh chóng, cán mốc một tỷ người sử dụng vào năm 2011.',
        fullName: 'Mark Elliot Zuckerberg',
    },
    {
        picture: 'micheal-mike-morhaime',
        infor: 'Michael "Mike" Morhaime (sinh năm 1967) là chủ tịch và đồng sáng lập của Blizzard Entertainment (thành lập năm 1991 với cái tên ban đầu là Silicon & Synapse), một nhà phát triển trò chơi điện tử có trụ sở tại Irvine, California và hiện đang được sở hữu bởi Activision Blizzard. Ông cũng là một học viên của Triangle Fraternity và đã lấy bằng cử nhân từ UCLA vào năm 1990.',
        fullName: 'Michael "Mike" Morhaime',
    },
    {
        picture: 'mike-harrington',
        infor: 'Mike Harrington là một lập trình viên và doanh nhân người Mỹ. Ông là người đồng sáng lập công ty phát triển trò chơi điện tử và phân phối kỹ thuật số Valve. Trước đây, một lập trình viên trò chơi tại Dynamix và một nhà thiết kế trên hệ điều hành Windows NT tại Microsoft, Harrington thành lập Valve năm 1996 cùng với Gabe Newell, một cựu nhân viên khác của Microsoft. Harrington và Newell đã tài trợ riêng cho việc phát triển sản phẩm đầu tay của Valve, Half-Life (1998), mà anh cũng giúp chương trình. Anh nói:"Tại Microsoft bạn luôn tự hỏi: Có phải tôi đang thành công hay là Microsoft?" Nhưng với Half-Life tôi biết Gabe và tôi đã xây dựng sản phẩm và công ty đó từ đầu." Vào ngày 15 tháng 1 năm 2000, Harrington đã hủy bỏ mối quan hệ đối tác với Newell và rời khỏi Valve để dành thời gian cho vợ. Theo Newell, Harrington không muốn mạo hiểm với một dự án khác sau thành công của Half-Life.',
        fullName: 'Mike Harrington',
    },
];

var counter = 0;

inforPicture.animate([
    // keyframes
    { transform: 'translateY(-100px)' },
    { transform: 'translateY(0px)' }
  ], {
    // timing options
    duration: 1000,
    fill : "forwards"
});

// Animate cho đoạn infor di chuyển từ dưới lên trên
infor.animate([
    // keyframes
    { transform: 'translateY(100px)' },
    { transform: 'translateY(0px)' }
  ], {
    // timing options
    duration: 1000,
    fill : "forwards"
});

// Gán thuộc tính style và textContent cho các biến:
inforPicture.style.backgroundImage = `url(./Pictures/${array[counter].picture}.jfif)`
inforName.textContent = array[counter].fullName;
infor.textContent = array[counter].infor;

inforPersonContainer.addEventListener('click', function (event) {
    console.log(event.target);
    if (event.target.classList.contains('next-button')) {
        // Animate cho ảnh di chuyển từ trên xuống dưới:
        inforPicture.animate([
            // keyframes
            { transform: 'translateY(-100px)' },
            { transform: 'translateY(0px)' }
          ], {
            // timing options
            duration: 1000,
            fill : "forwards"
        });

        // Animate cho đoạn infor di chuyển từ dưới lên trên
        infor.animate([
            // keyframes
            { transform: 'translateY(100px)' },
            { transform: 'translateY(0px)' }
          ], {
            // timing options
            duration: 1000,
            fill : "forwards"
        });

        counter++;

        if (counter > array.length - 1) {
            counter = 0;
        };

        // Gán thuộc tính style và textContent cho các biến:
        inforPicture.style.backgroundImage = `url(./Pictures/${array[counter].picture}.jfif)`
        inforName.textContent = array[counter].fullName;
        infor.textContent = array[counter].infor;
    } else if (event.target.classList.contains('previous-button')) {
        // Animate cho ảnh di chuyển từ trên xuống dưới:
        inforPicture.animate([
            // keyframes
            { transform: 'translateY(-100px)' },
            { transform: 'translateY(0px)' }
          ], {
            // timing options
            duration: 1000,
            fill : "forwards"
        });

        // Animate cho đoạn infor di chuyển từ dưới lên trên
        infor.animate([
            // keyframes
            { transform: 'translateY(100px)' },
            { transform: 'translateY(0px)' }
          ], {
            // timing options
            duration: 1000,
            fill : "forwards"
        });

        counter--;

        if (counter < 0) {
            counter = array.length - 1;
        };

        // Gán thuộc tính style và textContent cho các biến:
        inforPicture.style.backgroundImage = `url(./Pictures/${array[counter].picture}.jfif)`
        inforName.textContent = array[counter].fullName;
        infor.textContent = array[counter].infor;
    }
});