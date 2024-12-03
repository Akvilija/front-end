import { Typography, Paper } from '@mui/material';

const ShopStory = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: '20px',
        margin: '20px',
        backgroundColor: '#FFF8E1', 
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: '10px', color: '#FF7043' }}>
        Mūsų Parduotuvės Istorija
      </Typography>
      <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '18px', color: '#6A1B9A' }}>
        Kadaise, visai mažame kaimelyje, gyveno katinas vardu Murkis ir šuo vardu Baris. Jie buvo
        geriausi draugai, tačiau turėjo vieną bėdą - nei kaime, nei mieste nebuvo vietos, kur galėtų
        rasti tinkamus daiktus savo nuotykiams.
        </Typography>
       <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '18px', color: '#6A1B9A' }}>
        Vieną dieną Murkis sumąstė: <i>"Barį, mes galime atidaryti savo parduotuvę! Parduosime tai,
        ko niekur kitur nėra - tikrą prabangą gyvūnams!"</i>
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '18px', color: '#6A1B9A' }}>
        Baris, šypsodamasis, pridėjo: <i>"Taip, ir kiekvienas šuo gaus nemokamą kaulą!"</i>
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '18px', color: '#6A1B9A' }}>
        Taip gimė „Juokingų Gyvūnų Parduotuvė“ – vieta, kur katės jaučiasi kaip karalienės, o šunys
        gali tapti influencerių žvaigždėmis. Šiandien mes džiaugiamės galėdami dalintis savo meile
        gyvūnams ir linksmomis idėjomis su visais, kas nori savo augintiniams tik geriausio!
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '18px', color: '#6A1B9A' }}>
        Nes gyvūnai nusipelno ne tik meilės, bet ir truputį prabangos.
       </Typography>
    </Paper>
  );
};

export default ShopStory;