import Image from 'next/image';

const HomePage = () => {
    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
                <Image src="/image294.png" alt="Background" layout="fill" objectFit="cover" />
            </div>
            <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}>
                <Image src="/image2951.jpg" alt="Overlay" layout="fill" objectFit="cover" />
            </div>
            <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}>
                <Image src="/image2971.jpg" alt="Overlay" layout="fill" objectFit="cover" />
            </div>
            <div style={{ position: 'absolute', top: '6px', left: '12px', width: '45px', height: '45px' }}>
                <Image src="/photo_3_2024-11-04_12-10-42.jpg" alt="Logo" width={45} height={45} />
            </div>
            <div style={{ position: 'absolute', top: '0', left: '60px', width: '285px', height: '50px', padding: '2.88pt' }}>
                <p style={{ fontSize: '14pt', lineHeight: '119%', fontFamily: 'Calibri', color: 'white', fontWeight: 'bold' }}>Derartu Tulu Secondary</p>
            </div>
            <div style={{ position: 'absolute', top: '142px', left: '104px', width: '989px', height: '147px', padding: '2.88pt' }}>
                <p style={{ fontSize: '72pt', lineHeight: '119%', fontFamily: 'Cooper Black', color: 'white' }}>WELCOME</p>
            </div>
            <div style={{ position: 'absolute', top: '294px', left: '460px', width: '559px', height: '137px', padding: '2.88pt' }}>
                <p style={{ fontSize: '48pt', lineHeight: '119%', fontFamily: 'Cooper Black', color: 'white' }}>TO THE</p>
            </div>
            <div style={{ position: 'absolute', top: '404px', left: '418px', width: '504px', height: '149px', padding: '2.88pt' }}>
                <p style={{ fontSize: '48pt', lineHeight: '119%', fontFamily: 'Cooper Black', color: 'white' }}>WEBSITE</p>
            </div>
            <div style={{ position: 'absolute', top: '900px', left: '387px', width: '289px', height: '88px' }}>
                <Image src="/image306.png" alt="Library" width={289} height={88} />
            </div>
            <div style={{ position: 'absolute', top: '1031px', left: '387px', width: '289px', height: '88px' }}>
                <Image src="/image312.png" alt="Attendance" width={289} height={88} />
            </div>
            <div style={{ position: 'absolute', top: '1168px', left: '387px', width: '289px', height: '88px' }}>
                <Image src="/image317.png" alt="Department" width={289} height={88} />
            </div>
            <div style={{ position: 'absolute', top: '1542px', left: '87px', width: '704px', height: '269px', padding: '2.88pt' }}>
                <p style={{ fontSize: '14pt', lineHeight: '119%', fontFamily: 'Calibri', color: 'white', textDecoration: 'underline', fontWeight: 'bold' }}>Contact US:</p>
                <p style={{ fontSize: '11pt', lineHeight: '119%', fontFamily: 'Calibri', color: 'white', fontWeight: 'bold' }}>ADDRESS: ADDIS ABABA, AKAKI KALITY</p>
                <p style={{ fontSize: '11pt', lineHeight: '119%', fontFamily: 'Calibri', color: 'white', fontWeight: 'bold' }}>PHONE NO: 011 434 3278</p>
                <p style={{ fontSize: '11pt', lineHeight: '119%', fontFamily: 'Calibri', color: 'white', fontWeight: 'bold' }}>information:</p>
            </div>
            {/* <div style={{ position: 'absolute', top: '25px', left: '890px', width: '98px', height: '47px', padding: '2.88pt' }}>
                <a href="/"><p style={{ fontSize: '12pt', lineHeight: '119%', fontFamily: 'Calibri', color: 'white', textDecoration: 'underline', fontWeight: 'bold' }}>HOME</p></a>
            </div> */}
            <div style={{ position: 'absolute', top: '25px', left: '1011px', width: '128px', height: '47px', padding: '2.88pt' }}>
                <a href="/about"><p style={{ fontSize: '12pt', lineHeight: '119%', fontFamily: 'Calibri', color: 'white', textDecoration: 'underline', fontWeight: 'bold' }}>ABOUT US</p></a>
            </div>
        </div>
    );
};

export default HomePage;