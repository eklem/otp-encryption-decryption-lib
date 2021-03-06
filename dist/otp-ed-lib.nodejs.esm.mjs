import require$$0$1 from 'crypto';

var indexNode = {};

var otpFunctions = {};

var otpNode = {};

const crypto = require$$0$1.webcrypto;

// ### Function: Create one-time pad based on crypto.getRandomValues
function createOnetimePad$2 (length) {
  let otp = '';
  let randomValuesArr = crypto.getRandomValues(new Uint8Array(length));
  // converting to single digits
  for (var i = 0; i < randomValuesArr.length; i++) {
    otp += Math.floor(randomValuesArr[i]/256*10);
  }
  return otp
}

otpNode.createOnetimePad = createOnetimePad$2;

var codebookEmojis = {};

var require$$0 = [
	{
		unicode: "ð",
		plaincode: "00000"
	},
	{
		unicode: "ð",
		plaincode: "00001"
	},
	{
		unicode: "ð",
		plaincode: "00002"
	},
	{
		unicode: "ð",
		plaincode: "00003"
	},
	{
		unicode: "ð",
		plaincode: "00004"
	},
	{
		unicode: "ð",
		plaincode: "00005"
	},
	{
		unicode: "ðĪĢ",
		plaincode: "00006"
	},
	{
		unicode: "ð",
		plaincode: "00007"
	},
	{
		unicode: "ð",
		plaincode: "00008"
	},
	{
		unicode: "ð",
		plaincode: "00009"
	},
	{
		unicode: "ðŦ ",
		plaincode: "00010"
	},
	{
		unicode: "ð",
		plaincode: "00011"
	},
	{
		unicode: "ð",
		plaincode: "00012"
	},
	{
		unicode: "ð",
		plaincode: "00013"
	},
	{
		unicode: "ðĨ°",
		plaincode: "00014"
	},
	{
		unicode: "ð",
		plaincode: "00015"
	},
	{
		unicode: "ðĪĐ",
		plaincode: "00016"
	},
	{
		unicode: "ð",
		plaincode: "00017"
	},
	{
		unicode: "ð",
		plaincode: "00018"
	},
	{
		unicode: "ð",
		plaincode: "00019"
	},
	{
		unicode: "ð",
		plaincode: "00020"
	},
	{
		unicode: "ðĨē",
		plaincode: "00021"
	},
	{
		unicode: "ð",
		plaincode: "00022"
	},
	{
		unicode: "ð",
		plaincode: "00023"
	},
	{
		unicode: "ð",
		plaincode: "00024"
	},
	{
		unicode: "ðĪŠ",
		plaincode: "00025"
	},
	{
		unicode: "ð",
		plaincode: "00026"
	},
	{
		unicode: "ðĪ",
		plaincode: "00027"
	},
	{
		unicode: "ðĪ",
		plaincode: "00028"
	},
	{
		unicode: "ðĪ­",
		plaincode: "00029"
	},
	{
		unicode: "ðŦĒ",
		plaincode: "00030"
	},
	{
		unicode: "ðŦĢ",
		plaincode: "00031"
	},
	{
		unicode: "ðĪŦ",
		plaincode: "00032"
	},
	{
		unicode: "ðĪ",
		plaincode: "00033"
	},
	{
		unicode: "ðŦĄ",
		plaincode: "00034"
	},
	{
		unicode: "ðĪ",
		plaincode: "00035"
	},
	{
		unicode: "ðĪĻ",
		plaincode: "00036"
	},
	{
		unicode: "ð",
		plaincode: "00037"
	},
	{
		unicode: "ð",
		plaincode: "00038"
	},
	{
		unicode: "ðķ",
		plaincode: "00039"
	},
	{
		unicode: "ðŦĨ",
		plaincode: "00040"
	},
	{
		unicode: "ðķâðŦïļ",
		plaincode: "00041"
	},
	{
		unicode: "ð",
		plaincode: "00042"
	},
	{
		unicode: "ð",
		plaincode: "00043"
	},
	{
		unicode: "ð",
		plaincode: "00044"
	},
	{
		unicode: "ðŽ",
		plaincode: "00045"
	},
	{
		unicode: "ðŪâðĻ",
		plaincode: "00046"
	},
	{
		unicode: "ðĪĨ",
		plaincode: "00047"
	},
	{
		unicode: "ð",
		plaincode: "00048"
	},
	{
		unicode: "ð",
		plaincode: "00049"
	},
	{
		unicode: "ðŠ",
		plaincode: "00050"
	},
	{
		unicode: "ðĪĪ",
		plaincode: "00051"
	},
	{
		unicode: "ðī",
		plaincode: "00052"
	},
	{
		unicode: "ð·",
		plaincode: "00053"
	},
	{
		unicode: "ðĪ",
		plaincode: "00054"
	},
	{
		unicode: "ðĪ",
		plaincode: "00055"
	},
	{
		unicode: "ðĪĒ",
		plaincode: "00056"
	},
	{
		unicode: "ðĪŪ",
		plaincode: "00057"
	},
	{
		unicode: "ðĪ§",
		plaincode: "00058"
	},
	{
		unicode: "ðĨĩ",
		plaincode: "00059"
	},
	{
		unicode: "ðĨķ",
		plaincode: "00060"
	},
	{
		unicode: "ðĨī",
		plaincode: "00061"
	},
	{
		unicode: "ðĩ",
		plaincode: "00062"
	},
	{
		unicode: "ðĩâðŦ",
		plaincode: "00063"
	},
	{
		unicode: "ðĪŊ",
		plaincode: "00064"
	},
	{
		unicode: "ðĪ ",
		plaincode: "00065"
	},
	{
		unicode: "ðĨģ",
		plaincode: "00066"
	},
	{
		unicode: "ðĨļ",
		plaincode: "00067"
	},
	{
		unicode: "ð",
		plaincode: "00068"
	},
	{
		unicode: "ðĪ",
		plaincode: "00069"
	},
	{
		unicode: "ð§",
		plaincode: "00070"
	},
	{
		unicode: "ð",
		plaincode: "00071"
	},
	{
		unicode: "ðŦĪ",
		plaincode: "00072"
	},
	{
		unicode: "ð",
		plaincode: "00073"
	},
	{
		unicode: "ð",
		plaincode: "00074"
	},
	{
		unicode: "ðŪ",
		plaincode: "00075"
	},
	{
		unicode: "ðŊ",
		plaincode: "00076"
	},
	{
		unicode: "ðē",
		plaincode: "00077"
	},
	{
		unicode: "ðģ",
		plaincode: "00078"
	},
	{
		unicode: "ðĨš",
		plaincode: "00079"
	},
	{
		unicode: "ðĨđ",
		plaincode: "00080"
	},
	{
		unicode: "ðĶ",
		plaincode: "00081"
	},
	{
		unicode: "ð§",
		plaincode: "00082"
	},
	{
		unicode: "ðĻ",
		plaincode: "00083"
	},
	{
		unicode: "ð°",
		plaincode: "00084"
	},
	{
		unicode: "ðĨ",
		plaincode: "00085"
	},
	{
		unicode: "ðĒ",
		plaincode: "00086"
	},
	{
		unicode: "ð­",
		plaincode: "00087"
	},
	{
		unicode: "ðą",
		plaincode: "00088"
	},
	{
		unicode: "ð",
		plaincode: "00089"
	},
	{
		unicode: "ðĢ",
		plaincode: "00090"
	},
	{
		unicode: "ð",
		plaincode: "00091"
	},
	{
		unicode: "ð",
		plaincode: "00092"
	},
	{
		unicode: "ðĐ",
		plaincode: "00093"
	},
	{
		unicode: "ðŦ",
		plaincode: "00094"
	},
	{
		unicode: "ðĨą",
		plaincode: "00095"
	},
	{
		unicode: "ðĪ",
		plaincode: "00096"
	},
	{
		unicode: "ðĄ",
		plaincode: "00097"
	},
	{
		unicode: "ð ",
		plaincode: "00098"
	},
	{
		unicode: "ðĪŽ",
		plaincode: "00099"
	},
	{
		unicode: "ð",
		plaincode: "00100"
	},
	{
		unicode: "ðŋ",
		plaincode: "00101"
	},
	{
		unicode: "ð",
		plaincode: "00102"
	},
	{
		unicode: "ðĐ",
		plaincode: "00103"
	},
	{
		unicode: "ðĪĄ",
		plaincode: "00104"
	},
	{
		unicode: "ðđ",
		plaincode: "00105"
	},
	{
		unicode: "ðš",
		plaincode: "00106"
	},
	{
		unicode: "ðŧ",
		plaincode: "00107"
	},
	{
		unicode: "ð―",
		plaincode: "00108"
	},
	{
		unicode: "ðū",
		plaincode: "00109"
	},
	{
		unicode: "ðĪ",
		plaincode: "00110"
	},
	{
		unicode: "ðš",
		plaincode: "00111"
	},
	{
		unicode: "ðļ",
		plaincode: "00112"
	},
	{
		unicode: "ðđ",
		plaincode: "00113"
	},
	{
		unicode: "ðŧ",
		plaincode: "00114"
	},
	{
		unicode: "ðž",
		plaincode: "00115"
	},
	{
		unicode: "ð―",
		plaincode: "00116"
	},
	{
		unicode: "ð",
		plaincode: "00117"
	},
	{
		unicode: "ðŋ",
		plaincode: "00118"
	},
	{
		unicode: "ðū",
		plaincode: "00119"
	},
	{
		unicode: "ð",
		plaincode: "00120"
	},
	{
		unicode: "ð",
		plaincode: "00121"
	},
	{
		unicode: "ð",
		plaincode: "00122"
	},
	{
		unicode: "ð",
		plaincode: "00123"
	},
	{
		unicode: "ð",
		plaincode: "00124"
	},
	{
		unicode: "ð",
		plaincode: "00125"
	},
	{
		unicode: "ð",
		plaincode: "00126"
	},
	{
		unicode: "ð",
		plaincode: "00127"
	},
	{
		unicode: "ð",
		plaincode: "00128"
	},
	{
		unicode: "ð",
		plaincode: "00129"
	},
	{
		unicode: "ð",
		plaincode: "00130"
	},
	{
		unicode: "ð",
		plaincode: "00131"
	},
	{
		unicode: "ð",
		plaincode: "00132"
	},
	{
		unicode: "ð",
		plaincode: "00133"
	},
	{
		unicode: "âĪïļâðĨ",
		plaincode: "00134"
	},
	{
		unicode: "âĪïļâðĐđ",
		plaincode: "00135"
	},
	{
		unicode: "ð§Ą",
		plaincode: "00136"
	},
	{
		unicode: "ð",
		plaincode: "00137"
	},
	{
		unicode: "ð",
		plaincode: "00138"
	},
	{
		unicode: "ð",
		plaincode: "00139"
	},
	{
		unicode: "ð",
		plaincode: "00140"
	},
	{
		unicode: "ðĪ",
		plaincode: "00141"
	},
	{
		unicode: "ðĪ",
		plaincode: "00142"
	},
	{
		unicode: "ðĪ",
		plaincode: "00143"
	},
	{
		unicode: "ðŊ",
		plaincode: "00144"
	},
	{
		unicode: "ðĒ",
		plaincode: "00145"
	},
	{
		unicode: "ðĨ",
		plaincode: "00146"
	},
	{
		unicode: "ðŦ",
		plaincode: "00147"
	},
	{
		unicode: "ðĶ",
		plaincode: "00148"
	},
	{
		unicode: "ðĻ",
		plaincode: "00149"
	},
	{
		unicode: "ðĢ",
		plaincode: "00150"
	},
	{
		unicode: "ðŽ",
		plaincode: "00151"
	},
	{
		unicode: "ðïļâðĻïļ",
		plaincode: "00152"
	},
	{
		unicode: "ð­",
		plaincode: "00153"
	},
	{
		unicode: "ðĪ",
		plaincode: "00154"
	},
	{
		unicode: "ð",
		plaincode: "00155"
	},
	{
		unicode: "ððŧ",
		plaincode: "00156"
	},
	{
		unicode: "ððž",
		plaincode: "00157"
	},
	{
		unicode: "ðð―",
		plaincode: "00158"
	},
	{
		unicode: "ððū",
		plaincode: "00159"
	},
	{
		unicode: "ððŋ",
		plaincode: "00160"
	},
	{
		unicode: "ðĪ",
		plaincode: "00161"
	},
	{
		unicode: "ðĪðŧ",
		plaincode: "00162"
	},
	{
		unicode: "ðĪðž",
		plaincode: "00163"
	},
	{
		unicode: "ðĪð―",
		plaincode: "00164"
	},
	{
		unicode: "ðĪðū",
		plaincode: "00165"
	},
	{
		unicode: "ðĪðŋ",
		plaincode: "00166"
	},
	{
		unicode: "ððŧ",
		plaincode: "00167"
	},
	{
		unicode: "ððž",
		plaincode: "00168"
	},
	{
		unicode: "ðð―",
		plaincode: "00169"
	},
	{
		unicode: "ððū",
		plaincode: "00170"
	},
	{
		unicode: "ððŋ",
		plaincode: "00171"
	},
	{
		unicode: "â",
		plaincode: "00172"
	},
	{
		unicode: "âðŧ",
		plaincode: "00173"
	},
	{
		unicode: "âðž",
		plaincode: "00174"
	},
	{
		unicode: "âð―",
		plaincode: "00175"
	},
	{
		unicode: "âðū",
		plaincode: "00176"
	},
	{
		unicode: "âðŋ",
		plaincode: "00177"
	},
	{
		unicode: "ð",
		plaincode: "00178"
	},
	{
		unicode: "ððŧ",
		plaincode: "00179"
	},
	{
		unicode: "ððž",
		plaincode: "00180"
	},
	{
		unicode: "ðð―",
		plaincode: "00181"
	},
	{
		unicode: "ððū",
		plaincode: "00182"
	},
	{
		unicode: "ððŋ",
		plaincode: "00183"
	},
	{
		unicode: "ðŦą",
		plaincode: "00184"
	},
	{
		unicode: "ðŦąðŧ",
		plaincode: "00185"
	},
	{
		unicode: "ðŦąðž",
		plaincode: "00186"
	},
	{
		unicode: "ðŦąð―",
		plaincode: "00187"
	},
	{
		unicode: "ðŦąðū",
		plaincode: "00188"
	},
	{
		unicode: "ðŦąðŋ",
		plaincode: "00189"
	},
	{
		unicode: "ðŦē",
		plaincode: "00190"
	},
	{
		unicode: "ðŦēðŧ",
		plaincode: "00191"
	},
	{
		unicode: "ðŦēðž",
		plaincode: "00192"
	},
	{
		unicode: "ðŦēð―",
		plaincode: "00193"
	},
	{
		unicode: "ðŦēðū",
		plaincode: "00194"
	},
	{
		unicode: "ðŦēðŋ",
		plaincode: "00195"
	},
	{
		unicode: "ðŦģ",
		plaincode: "00196"
	},
	{
		unicode: "ðŦģðŧ",
		plaincode: "00197"
	},
	{
		unicode: "ðŦģðž",
		plaincode: "00198"
	},
	{
		unicode: "ðŦģð―",
		plaincode: "00199"
	},
	{
		unicode: "ðŦģðū",
		plaincode: "00200"
	},
	{
		unicode: "ðŦģðŋ",
		plaincode: "00201"
	},
	{
		unicode: "ðŦī",
		plaincode: "00202"
	},
	{
		unicode: "ðŦīðŧ",
		plaincode: "00203"
	},
	{
		unicode: "ðŦīðž",
		plaincode: "00204"
	},
	{
		unicode: "ðŦīð―",
		plaincode: "00205"
	},
	{
		unicode: "ðŦīðū",
		plaincode: "00206"
	},
	{
		unicode: "ðŦīðŋ",
		plaincode: "00207"
	},
	{
		unicode: "ð",
		plaincode: "00208"
	},
	{
		unicode: "ððŧ",
		plaincode: "00209"
	},
	{
		unicode: "ððž",
		plaincode: "00210"
	},
	{
		unicode: "ðð―",
		plaincode: "00211"
	},
	{
		unicode: "ððū",
		plaincode: "00212"
	},
	{
		unicode: "ððŋ",
		plaincode: "00213"
	},
	{
		unicode: "ðĪ",
		plaincode: "00214"
	},
	{
		unicode: "ðĪðŧ",
		plaincode: "00215"
	},
	{
		unicode: "ðĪðž",
		plaincode: "00216"
	},
	{
		unicode: "ðĪð―",
		plaincode: "00217"
	},
	{
		unicode: "ðĪðū",
		plaincode: "00218"
	},
	{
		unicode: "ðĪðŋ",
		plaincode: "00219"
	},
	{
		unicode: "ðĪ",
		plaincode: "00220"
	},
	{
		unicode: "ðĪðŧ",
		plaincode: "00221"
	},
	{
		unicode: "ðĪðž",
		plaincode: "00222"
	},
	{
		unicode: "ðĪð―",
		plaincode: "00223"
	},
	{
		unicode: "ðĪðū",
		plaincode: "00224"
	},
	{
		unicode: "ðĪðŋ",
		plaincode: "00225"
	},
	{
		unicode: "âðŧ",
		plaincode: "00226"
	},
	{
		unicode: "âðž",
		plaincode: "00227"
	},
	{
		unicode: "âð―",
		plaincode: "00228"
	},
	{
		unicode: "âðū",
		plaincode: "00229"
	},
	{
		unicode: "âðŋ",
		plaincode: "00230"
	},
	{
		unicode: "ðĪ",
		plaincode: "00231"
	},
	{
		unicode: "ðĪðŧ",
		plaincode: "00232"
	},
	{
		unicode: "ðĪðž",
		plaincode: "00233"
	},
	{
		unicode: "ðĪð―",
		plaincode: "00234"
	},
	{
		unicode: "ðĪðū",
		plaincode: "00235"
	},
	{
		unicode: "ðĪðŋ",
		plaincode: "00236"
	},
	{
		unicode: "ðŦ°",
		plaincode: "00237"
	},
	{
		unicode: "ðŦ°ðŧ",
		plaincode: "00238"
	},
	{
		unicode: "ðŦ°ðž",
		plaincode: "00239"
	},
	{
		unicode: "ðŦ°ð―",
		plaincode: "00240"
	},
	{
		unicode: "ðŦ°ðū",
		plaincode: "00241"
	},
	{
		unicode: "ðŦ°ðŋ",
		plaincode: "00242"
	},
	{
		unicode: "ðĪ",
		plaincode: "00243"
	},
	{
		unicode: "ðĪðŧ",
		plaincode: "00244"
	},
	{
		unicode: "ðĪðž",
		plaincode: "00245"
	},
	{
		unicode: "ðĪð―",
		plaincode: "00246"
	},
	{
		unicode: "ðĪðū",
		plaincode: "00247"
	},
	{
		unicode: "ðĪðŋ",
		plaincode: "00248"
	},
	{
		unicode: "ðĪ",
		plaincode: "00249"
	},
	{
		unicode: "ðĪðŧ",
		plaincode: "00250"
	},
	{
		unicode: "ðĪðž",
		plaincode: "00251"
	},
	{
		unicode: "ðĪð―",
		plaincode: "00252"
	},
	{
		unicode: "ðĪðū",
		plaincode: "00253"
	},
	{
		unicode: "ðĪðŋ",
		plaincode: "00254"
	},
	{
		unicode: "ðĪ",
		plaincode: "00255"
	},
	{
		unicode: "ðĪðŧ",
		plaincode: "00256"
	},
	{
		unicode: "ðĪðž",
		plaincode: "00257"
	},
	{
		unicode: "ðĪð―",
		plaincode: "00258"
	},
	{
		unicode: "ðĪðū",
		plaincode: "00259"
	},
	{
		unicode: "ðĪðŋ",
		plaincode: "00260"
	},
	{
		unicode: "ð",
		plaincode: "00261"
	},
	{
		unicode: "ððŧ",
		plaincode: "00262"
	},
	{
		unicode: "ððž",
		plaincode: "00263"
	},
	{
		unicode: "ðð―",
		plaincode: "00264"
	},
	{
		unicode: "ððū",
		plaincode: "00265"
	},
	{
		unicode: "ððŋ",
		plaincode: "00266"
	},
	{
		unicode: "ð",
		plaincode: "00267"
	},
	{
		unicode: "ððŧ",
		plaincode: "00268"
	},
	{
		unicode: "ððž",
		plaincode: "00269"
	},
	{
		unicode: "ðð―",
		plaincode: "00270"
	},
	{
		unicode: "ððū",
		plaincode: "00271"
	},
	{
		unicode: "ððŋ",
		plaincode: "00272"
	},
	{
		unicode: "ð",
		plaincode: "00273"
	},
	{
		unicode: "ððŧ",
		plaincode: "00274"
	},
	{
		unicode: "ððž",
		plaincode: "00275"
	},
	{
		unicode: "ðð―",
		plaincode: "00276"
	},
	{
		unicode: "ððū",
		plaincode: "00277"
	},
	{
		unicode: "ððŋ",
		plaincode: "00278"
	},
	{
		unicode: "ð",
		plaincode: "00279"
	},
	{
		unicode: "ððŧ",
		plaincode: "00280"
	},
	{
		unicode: "ððž",
		plaincode: "00281"
	},
	{
		unicode: "ðð―",
		plaincode: "00282"
	},
	{
		unicode: "ððū",
		plaincode: "00283"
	},
	{
		unicode: "ððŋ",
		plaincode: "00284"
	},
	{
		unicode: "ð",
		plaincode: "00285"
	},
	{
		unicode: "ððŧ",
		plaincode: "00286"
	},
	{
		unicode: "ððž",
		plaincode: "00287"
	},
	{
		unicode: "ðð―",
		plaincode: "00288"
	},
	{
		unicode: "ððū",
		plaincode: "00289"
	},
	{
		unicode: "ððŋ",
		plaincode: "00290"
	},
	{
		unicode: "âðŧ",
		plaincode: "00291"
	},
	{
		unicode: "âðž",
		plaincode: "00292"
	},
	{
		unicode: "âð―",
		plaincode: "00293"
	},
	{
		unicode: "âðū",
		plaincode: "00294"
	},
	{
		unicode: "âðŋ",
		plaincode: "00295"
	},
	{
		unicode: "ðŦĩ",
		plaincode: "00296"
	},
	{
		unicode: "ðŦĩðŧ",
		plaincode: "00297"
	},
	{
		unicode: "ðŦĩðž",
		plaincode: "00298"
	},
	{
		unicode: "ðŦĩð―",
		plaincode: "00299"
	},
	{
		unicode: "ðŦĩðū",
		plaincode: "00300"
	},
	{
		unicode: "ðŦĩðŋ",
		plaincode: "00301"
	},
	{
		unicode: "ð",
		plaincode: "00302"
	},
	{
		unicode: "ððŧ",
		plaincode: "00303"
	},
	{
		unicode: "ððž",
		plaincode: "00304"
	},
	{
		unicode: "ðð―",
		plaincode: "00305"
	},
	{
		unicode: "ððū",
		plaincode: "00306"
	},
	{
		unicode: "ððŋ",
		plaincode: "00307"
	},
	{
		unicode: "ð",
		plaincode: "00308"
	},
	{
		unicode: "ððŧ",
		plaincode: "00309"
	},
	{
		unicode: "ððž",
		plaincode: "00310"
	},
	{
		unicode: "ðð―",
		plaincode: "00311"
	},
	{
		unicode: "ððū",
		plaincode: "00312"
	},
	{
		unicode: "ððŋ",
		plaincode: "00313"
	},
	{
		unicode: "â",
		plaincode: "00314"
	},
	{
		unicode: "âðŧ",
		plaincode: "00315"
	},
	{
		unicode: "âðž",
		plaincode: "00316"
	},
	{
		unicode: "âð―",
		plaincode: "00317"
	},
	{
		unicode: "âðū",
		plaincode: "00318"
	},
	{
		unicode: "âðŋ",
		plaincode: "00319"
	},
	{
		unicode: "ð",
		plaincode: "00320"
	},
	{
		unicode: "ððŧ",
		plaincode: "00321"
	},
	{
		unicode: "ððž",
		plaincode: "00322"
	},
	{
		unicode: "ðð―",
		plaincode: "00323"
	},
	{
		unicode: "ððū",
		plaincode: "00324"
	},
	{
		unicode: "ððŋ",
		plaincode: "00325"
	},
	{
		unicode: "ðĪ",
		plaincode: "00326"
	},
	{
		unicode: "ðĪðŧ",
		plaincode: "00327"
	},
	{
		unicode: "ðĪðž",
		plaincode: "00328"
	},
	{
		unicode: "ðĪð―",
		plaincode: "00329"
	},
	{
		unicode: "ðĪðū",
		plaincode: "00330"
	},
	{
		unicode: "ðĪðŋ",
		plaincode: "00331"
	},
	{
		unicode: "ðĪ",
		plaincode: "00332"
	},
	{
		unicode: "ðĪðŧ",
		plaincode: "00333"
	},
	{
		unicode: "ðĪðž",
		plaincode: "00334"
	},
	{
		unicode: "ðĪð―",
		plaincode: "00335"
	},
	{
		unicode: "ðĪðū",
		plaincode: "00336"
	},
	{
		unicode: "ðĪðŋ",
		plaincode: "00337"
	},
	{
		unicode: "ð",
		plaincode: "00338"
	},
	{
		unicode: "ððŧ",
		plaincode: "00339"
	},
	{
		unicode: "ððž",
		plaincode: "00340"
	},
	{
		unicode: "ðð―",
		plaincode: "00341"
	},
	{
		unicode: "ððū",
		plaincode: "00342"
	},
	{
		unicode: "ððŋ",
		plaincode: "00343"
	},
	{
		unicode: "ð",
		plaincode: "00344"
	},
	{
		unicode: "ððŧ",
		plaincode: "00345"
	},
	{
		unicode: "ððž",
		plaincode: "00346"
	},
	{
		unicode: "ðð―",
		plaincode: "00347"
	},
	{
		unicode: "ððū",
		plaincode: "00348"
	},
	{
		unicode: "ððŋ",
		plaincode: "00349"
	},
	{
		unicode: "ðŦķ",
		plaincode: "00350"
	},
	{
		unicode: "ðŦķðŧ",
		plaincode: "00351"
	},
	{
		unicode: "ðŦķðž",
		plaincode: "00352"
	},
	{
		unicode: "ðŦķð―",
		plaincode: "00353"
	},
	{
		unicode: "ðŦķðū",
		plaincode: "00354"
	},
	{
		unicode: "ðŦķðŋ",
		plaincode: "00355"
	},
	{
		unicode: "ð",
		plaincode: "00356"
	},
	{
		unicode: "ððŧ",
		plaincode: "00357"
	},
	{
		unicode: "ððž",
		plaincode: "00358"
	},
	{
		unicode: "ðð―",
		plaincode: "00359"
	},
	{
		unicode: "ððū",
		plaincode: "00360"
	},
	{
		unicode: "ððŋ",
		plaincode: "00361"
	},
	{
		unicode: "ðĪē",
		plaincode: "00362"
	},
	{
		unicode: "ðĪēðŧ",
		plaincode: "00363"
	},
	{
		unicode: "ðĪēðž",
		plaincode: "00364"
	},
	{
		unicode: "ðĪēð―",
		plaincode: "00365"
	},
	{
		unicode: "ðĪēðū",
		plaincode: "00366"
	},
	{
		unicode: "ðĪēðŋ",
		plaincode: "00367"
	},
	{
		unicode: "ðĪ",
		plaincode: "00368"
	},
	{
		unicode: "ðĪðŧ",
		plaincode: "00369"
	},
	{
		unicode: "ðĪðž",
		plaincode: "00370"
	},
	{
		unicode: "ðĪð―",
		plaincode: "00371"
	},
	{
		unicode: "ðĪðū",
		plaincode: "00372"
	},
	{
		unicode: "ðĪðŋ",
		plaincode: "00373"
	},
	{
		unicode: "ðŦąðŧâðŦēðž",
		plaincode: "00374"
	},
	{
		unicode: "ðŦąðŧâðŦēð―",
		plaincode: "00375"
	},
	{
		unicode: "ðŦąðŧâðŦēðū",
		plaincode: "00376"
	},
	{
		unicode: "ðŦąðŧâðŦēðŋ",
		plaincode: "00377"
	},
	{
		unicode: "ðŦąðžâðŦēðŧ",
		plaincode: "00378"
	},
	{
		unicode: "ðŦąðžâðŦēð―",
		plaincode: "00379"
	},
	{
		unicode: "ðŦąðžâðŦēðū",
		plaincode: "00380"
	},
	{
		unicode: "ðŦąðžâðŦēðŋ",
		plaincode: "00381"
	},
	{
		unicode: "ðŦąð―âðŦēðŧ",
		plaincode: "00382"
	},
	{
		unicode: "ðŦąð―âðŦēðž",
		plaincode: "00383"
	},
	{
		unicode: "ðŦąð―âðŦēðū",
		plaincode: "00384"
	},
	{
		unicode: "ðŦąð―âðŦēðŋ",
		plaincode: "00385"
	},
	{
		unicode: "ðŦąðūâðŦēðŧ",
		plaincode: "00386"
	},
	{
		unicode: "ðŦąðūâðŦēðž",
		plaincode: "00387"
	},
	{
		unicode: "ðŦąðūâðŦēð―",
		plaincode: "00388"
	},
	{
		unicode: "ðŦąðūâðŦēðŋ",
		plaincode: "00389"
	},
	{
		unicode: "ðŦąðŋâðŦēðŧ",
		plaincode: "00390"
	},
	{
		unicode: "ðŦąðŋâðŦēðž",
		plaincode: "00391"
	},
	{
		unicode: "ðŦąðŋâðŦēð―",
		plaincode: "00392"
	},
	{
		unicode: "ðŦąðŋâðŦēðū",
		plaincode: "00393"
	},
	{
		unicode: "ð",
		plaincode: "00394"
	},
	{
		unicode: "ððŧ",
		plaincode: "00395"
	},
	{
		unicode: "ððž",
		plaincode: "00396"
	},
	{
		unicode: "ðð―",
		plaincode: "00397"
	},
	{
		unicode: "ððū",
		plaincode: "00398"
	},
	{
		unicode: "ððŋ",
		plaincode: "00399"
	},
	{
		unicode: "âðŧ",
		plaincode: "00400"
	},
	{
		unicode: "âðž",
		plaincode: "00401"
	},
	{
		unicode: "âð―",
		plaincode: "00402"
	},
	{
		unicode: "âðū",
		plaincode: "00403"
	},
	{
		unicode: "âðŋ",
		plaincode: "00404"
	},
	{
		unicode: "ð",
		plaincode: "00405"
	},
	{
		unicode: "ððŧ",
		plaincode: "00406"
	},
	{
		unicode: "ððž",
		plaincode: "00407"
	},
	{
		unicode: "ðð―",
		plaincode: "00408"
	},
	{
		unicode: "ððū",
		plaincode: "00409"
	},
	{
		unicode: "ððŋ",
		plaincode: "00410"
	},
	{
		unicode: "ðĪģ",
		plaincode: "00411"
	},
	{
		unicode: "ðĪģðŧ",
		plaincode: "00412"
	},
	{
		unicode: "ðĪģðž",
		plaincode: "00413"
	},
	{
		unicode: "ðĪģð―",
		plaincode: "00414"
	},
	{
		unicode: "ðĪģðū",
		plaincode: "00415"
	},
	{
		unicode: "ðĪģðŋ",
		plaincode: "00416"
	},
	{
		unicode: "ðŠ",
		plaincode: "00417"
	},
	{
		unicode: "ðŠðŧ",
		plaincode: "00418"
	},
	{
		unicode: "ðŠðž",
		plaincode: "00419"
	},
	{
		unicode: "ðŠð―",
		plaincode: "00420"
	},
	{
		unicode: "ðŠðū",
		plaincode: "00421"
	},
	{
		unicode: "ðŠðŋ",
		plaincode: "00422"
	},
	{
		unicode: "ðĶū",
		plaincode: "00423"
	},
	{
		unicode: "ðĶŋ",
		plaincode: "00424"
	},
	{
		unicode: "ðĶĩ",
		plaincode: "00425"
	},
	{
		unicode: "ðĶĩðŧ",
		plaincode: "00426"
	},
	{
		unicode: "ðĶĩðž",
		plaincode: "00427"
	},
	{
		unicode: "ðĶĩð―",
		plaincode: "00428"
	},
	{
		unicode: "ðĶĩðū",
		plaincode: "00429"
	},
	{
		unicode: "ðĶĩðŋ",
		plaincode: "00430"
	},
	{
		unicode: "ðĶķ",
		plaincode: "00431"
	},
	{
		unicode: "ðĶķðŧ",
		plaincode: "00432"
	},
	{
		unicode: "ðĶķðž",
		plaincode: "00433"
	},
	{
		unicode: "ðĶķð―",
		plaincode: "00434"
	},
	{
		unicode: "ðĶķðū",
		plaincode: "00435"
	},
	{
		unicode: "ðĶķðŋ",
		plaincode: "00436"
	},
	{
		unicode: "ð",
		plaincode: "00437"
	},
	{
		unicode: "ððŧ",
		plaincode: "00438"
	},
	{
		unicode: "ððž",
		plaincode: "00439"
	},
	{
		unicode: "ðð―",
		plaincode: "00440"
	},
	{
		unicode: "ððū",
		plaincode: "00441"
	},
	{
		unicode: "ððŋ",
		plaincode: "00442"
	},
	{
		unicode: "ðĶŧ",
		plaincode: "00443"
	},
	{
		unicode: "ðĶŧðŧ",
		plaincode: "00444"
	},
	{
		unicode: "ðĶŧðž",
		plaincode: "00445"
	},
	{
		unicode: "ðĶŧð―",
		plaincode: "00446"
	},
	{
		unicode: "ðĶŧðū",
		plaincode: "00447"
	},
	{
		unicode: "ðĶŧðŋ",
		plaincode: "00448"
	},
	{
		unicode: "ð",
		plaincode: "00449"
	},
	{
		unicode: "ððŧ",
		plaincode: "00450"
	},
	{
		unicode: "ððž",
		plaincode: "00451"
	},
	{
		unicode: "ðð―",
		plaincode: "00452"
	},
	{
		unicode: "ððū",
		plaincode: "00453"
	},
	{
		unicode: "ððŋ",
		plaincode: "00454"
	},
	{
		unicode: "ð§ ",
		plaincode: "00455"
	},
	{
		unicode: "ðŦ",
		plaincode: "00456"
	},
	{
		unicode: "ðŦ",
		plaincode: "00457"
	},
	{
		unicode: "ðĶ·",
		plaincode: "00458"
	},
	{
		unicode: "ðĶī",
		plaincode: "00459"
	},
	{
		unicode: "ð",
		plaincode: "00460"
	},
	{
		unicode: "ð",
		plaincode: "00461"
	},
	{
		unicode: "ð",
		plaincode: "00462"
	},
	{
		unicode: "ðŦĶ",
		plaincode: "00463"
	},
	{
		unicode: "ðķ",
		plaincode: "00464"
	},
	{
		unicode: "ðķðŧ",
		plaincode: "00465"
	},
	{
		unicode: "ðķðž",
		plaincode: "00466"
	},
	{
		unicode: "ðķð―",
		plaincode: "00467"
	},
	{
		unicode: "ðķðū",
		plaincode: "00468"
	},
	{
		unicode: "ðķðŋ",
		plaincode: "00469"
	},
	{
		unicode: "ð§",
		plaincode: "00470"
	},
	{
		unicode: "ð§ðŧ",
		plaincode: "00471"
	},
	{
		unicode: "ð§ðž",
		plaincode: "00472"
	},
	{
		unicode: "ð§ð―",
		plaincode: "00473"
	},
	{
		unicode: "ð§ðū",
		plaincode: "00474"
	},
	{
		unicode: "ð§ðŋ",
		plaincode: "00475"
	},
	{
		unicode: "ðĶ",
		plaincode: "00476"
	},
	{
		unicode: "ðĶðŧ",
		plaincode: "00477"
	},
	{
		unicode: "ðĶðž",
		plaincode: "00478"
	},
	{
		unicode: "ðĶð―",
		plaincode: "00479"
	},
	{
		unicode: "ðĶðū",
		plaincode: "00480"
	},
	{
		unicode: "ðĶðŋ",
		plaincode: "00481"
	},
	{
		unicode: "ð§",
		plaincode: "00482"
	},
	{
		unicode: "ð§ðŧ",
		plaincode: "00483"
	},
	{
		unicode: "ð§ðž",
		plaincode: "00484"
	},
	{
		unicode: "ð§ð―",
		plaincode: "00485"
	},
	{
		unicode: "ð§ðū",
		plaincode: "00486"
	},
	{
		unicode: "ð§ðŋ",
		plaincode: "00487"
	},
	{
		unicode: "ð§",
		plaincode: "00488"
	},
	{
		unicode: "ð§ðŧ",
		plaincode: "00489"
	},
	{
		unicode: "ð§ðž",
		plaincode: "00490"
	},
	{
		unicode: "ð§ð―",
		plaincode: "00491"
	},
	{
		unicode: "ð§ðū",
		plaincode: "00492"
	},
	{
		unicode: "ð§ðŋ",
		plaincode: "00493"
	},
	{
		unicode: "ðą",
		plaincode: "00494"
	},
	{
		unicode: "ðąðŧ",
		plaincode: "00495"
	},
	{
		unicode: "ðąðž",
		plaincode: "00496"
	},
	{
		unicode: "ðąð―",
		plaincode: "00497"
	},
	{
		unicode: "ðąðū",
		plaincode: "00498"
	},
	{
		unicode: "ðąðŋ",
		plaincode: "00499"
	},
	{
		unicode: "ðĻ",
		plaincode: "00500"
	},
	{
		unicode: "ðĻðŧ",
		plaincode: "00501"
	},
	{
		unicode: "ðĻðž",
		plaincode: "00502"
	},
	{
		unicode: "ðĻð―",
		plaincode: "00503"
	},
	{
		unicode: "ðĻðū",
		plaincode: "00504"
	},
	{
		unicode: "ðĻðŋ",
		plaincode: "00505"
	},
	{
		unicode: "ð§",
		plaincode: "00506"
	},
	{
		unicode: "ð§ðŧ",
		plaincode: "00507"
	},
	{
		unicode: "ð§ðž",
		plaincode: "00508"
	},
	{
		unicode: "ð§ð―",
		plaincode: "00509"
	},
	{
		unicode: "ð§ðū",
		plaincode: "00510"
	},
	{
		unicode: "ð§ðŋ",
		plaincode: "00511"
	},
	{
		unicode: "ð§ââïļ",
		plaincode: "00512"
	},
	{
		unicode: "ð§ðŧââïļ",
		plaincode: "00513"
	},
	{
		unicode: "ð§ðžââïļ",
		plaincode: "00514"
	},
	{
		unicode: "ð§ð―ââïļ",
		plaincode: "00515"
	},
	{
		unicode: "ð§ðūââïļ",
		plaincode: "00516"
	},
	{
		unicode: "ð§ðŋââïļ",
		plaincode: "00517"
	},
	{
		unicode: "ð§ââïļ",
		plaincode: "00518"
	},
	{
		unicode: "ð§ðŧââïļ",
		plaincode: "00519"
	},
	{
		unicode: "ð§ðžââïļ",
		plaincode: "00520"
	},
	{
		unicode: "ð§ð―ââïļ",
		plaincode: "00521"
	},
	{
		unicode: "ð§ðūââïļ",
		plaincode: "00522"
	},
	{
		unicode: "ð§ðŋââïļ",
		plaincode: "00523"
	},
	{
		unicode: "ðĻâðĶ°",
		plaincode: "00524"
	},
	{
		unicode: "ðĻðŧâðĶ°",
		plaincode: "00525"
	},
	{
		unicode: "ðĻðžâðĶ°",
		plaincode: "00526"
	},
	{
		unicode: "ðĻð―âðĶ°",
		plaincode: "00527"
	},
	{
		unicode: "ðĻðūâðĶ°",
		plaincode: "00528"
	},
	{
		unicode: "ðĻðŋâðĶ°",
		plaincode: "00529"
	},
	{
		unicode: "ðĻâðĶą",
		plaincode: "00530"
	},
	{
		unicode: "ðĻðŧâðĶą",
		plaincode: "00531"
	},
	{
		unicode: "ðĻðžâðĶą",
		plaincode: "00532"
	},
	{
		unicode: "ðĻð―âðĶą",
		plaincode: "00533"
	},
	{
		unicode: "ðĻðūâðĶą",
		plaincode: "00534"
	},
	{
		unicode: "ðĻðŋâðĶą",
		plaincode: "00535"
	},
	{
		unicode: "ðĻâðĶģ",
		plaincode: "00536"
	},
	{
		unicode: "ðĻðŧâðĶģ",
		plaincode: "00537"
	},
	{
		unicode: "ðĻðžâðĶģ",
		plaincode: "00538"
	},
	{
		unicode: "ðĻð―âðĶģ",
		plaincode: "00539"
	},
	{
		unicode: "ðĻðūâðĶģ",
		plaincode: "00540"
	},
	{
		unicode: "ðĻðŋâðĶģ",
		plaincode: "00541"
	},
	{
		unicode: "ðĻâðĶē",
		plaincode: "00542"
	},
	{
		unicode: "ðĻðŧâðĶē",
		plaincode: "00543"
	},
	{
		unicode: "ðĻðžâðĶē",
		plaincode: "00544"
	},
	{
		unicode: "ðĻð―âðĶē",
		plaincode: "00545"
	},
	{
		unicode: "ðĻðūâðĶē",
		plaincode: "00546"
	},
	{
		unicode: "ðĻðŋâðĶē",
		plaincode: "00547"
	},
	{
		unicode: "ðĐ",
		plaincode: "00548"
	},
	{
		unicode: "ðĐðŧ",
		plaincode: "00549"
	},
	{
		unicode: "ðĐðž",
		plaincode: "00550"
	},
	{
		unicode: "ðĐð―",
		plaincode: "00551"
	},
	{
		unicode: "ðĐðū",
		plaincode: "00552"
	},
	{
		unicode: "ðĐðŋ",
		plaincode: "00553"
	},
	{
		unicode: "ðĐâðĶ°",
		plaincode: "00554"
	},
	{
		unicode: "ðĐðŧâðĶ°",
		plaincode: "00555"
	},
	{
		unicode: "ðĐðžâðĶ°",
		plaincode: "00556"
	},
	{
		unicode: "ðĐð―âðĶ°",
		plaincode: "00557"
	},
	{
		unicode: "ðĐðūâðĶ°",
		plaincode: "00558"
	},
	{
		unicode: "ðĐðŋâðĶ°",
		plaincode: "00559"
	},
	{
		unicode: "ð§âðĶ°",
		plaincode: "00560"
	},
	{
		unicode: "ð§ðŧâðĶ°",
		plaincode: "00561"
	},
	{
		unicode: "ð§ðžâðĶ°",
		plaincode: "00562"
	},
	{
		unicode: "ð§ð―âðĶ°",
		plaincode: "00563"
	},
	{
		unicode: "ð§ðūâðĶ°",
		plaincode: "00564"
	},
	{
		unicode: "ð§ðŋâðĶ°",
		plaincode: "00565"
	},
	{
		unicode: "ðĐâðĶą",
		plaincode: "00566"
	},
	{
		unicode: "ðĐðŧâðĶą",
		plaincode: "00567"
	},
	{
		unicode: "ðĐðžâðĶą",
		plaincode: "00568"
	},
	{
		unicode: "ðĐð―âðĶą",
		plaincode: "00569"
	},
	{
		unicode: "ðĐðūâðĶą",
		plaincode: "00570"
	},
	{
		unicode: "ðĐðŋâðĶą",
		plaincode: "00571"
	},
	{
		unicode: "ð§âðĶą",
		plaincode: "00572"
	},
	{
		unicode: "ð§ðŧâðĶą",
		plaincode: "00573"
	},
	{
		unicode: "ð§ðžâðĶą",
		plaincode: "00574"
	},
	{
		unicode: "ð§ð―âðĶą",
		plaincode: "00575"
	},
	{
		unicode: "ð§ðūâðĶą",
		plaincode: "00576"
	},
	{
		unicode: "ð§ðŋâðĶą",
		plaincode: "00577"
	},
	{
		unicode: "ðĐâðĶģ",
		plaincode: "00578"
	},
	{
		unicode: "ðĐðŧâðĶģ",
		plaincode: "00579"
	},
	{
		unicode: "ðĐðžâðĶģ",
		plaincode: "00580"
	},
	{
		unicode: "ðĐð―âðĶģ",
		plaincode: "00581"
	},
	{
		unicode: "ðĐðūâðĶģ",
		plaincode: "00582"
	},
	{
		unicode: "ðĐðŋâðĶģ",
		plaincode: "00583"
	},
	{
		unicode: "ð§âðĶģ",
		plaincode: "00584"
	},
	{
		unicode: "ð§ðŧâðĶģ",
		plaincode: "00585"
	},
	{
		unicode: "ð§ðžâðĶģ",
		plaincode: "00586"
	},
	{
		unicode: "ð§ð―âðĶģ",
		plaincode: "00587"
	},
	{
		unicode: "ð§ðūâðĶģ",
		plaincode: "00588"
	},
	{
		unicode: "ð§ðŋâðĶģ",
		plaincode: "00589"
	},
	{
		unicode: "ðĐâðĶē",
		plaincode: "00590"
	},
	{
		unicode: "ðĐðŧâðĶē",
		plaincode: "00591"
	},
	{
		unicode: "ðĐðžâðĶē",
		plaincode: "00592"
	},
	{
		unicode: "ðĐð―âðĶē",
		plaincode: "00593"
	},
	{
		unicode: "ðĐðūâðĶē",
		plaincode: "00594"
	},
	{
		unicode: "ðĐðŋâðĶē",
		plaincode: "00595"
	},
	{
		unicode: "ð§âðĶē",
		plaincode: "00596"
	},
	{
		unicode: "ð§ðŧâðĶē",
		plaincode: "00597"
	},
	{
		unicode: "ð§ðžâðĶē",
		plaincode: "00598"
	},
	{
		unicode: "ð§ð―âðĶē",
		plaincode: "00599"
	},
	{
		unicode: "ð§ðūâðĶē",
		plaincode: "00600"
	},
	{
		unicode: "ð§ðŋâðĶē",
		plaincode: "00601"
	},
	{
		unicode: "ðąââïļ",
		plaincode: "00602"
	},
	{
		unicode: "ðąðŧââïļ",
		plaincode: "00603"
	},
	{
		unicode: "ðąðžââïļ",
		plaincode: "00604"
	},
	{
		unicode: "ðąð―ââïļ",
		plaincode: "00605"
	},
	{
		unicode: "ðąðūââïļ",
		plaincode: "00606"
	},
	{
		unicode: "ðąðŋââïļ",
		plaincode: "00607"
	},
	{
		unicode: "ðąââïļ",
		plaincode: "00608"
	},
	{
		unicode: "ðąðŧââïļ",
		plaincode: "00609"
	},
	{
		unicode: "ðąðžââïļ",
		plaincode: "00610"
	},
	{
		unicode: "ðąð―ââïļ",
		plaincode: "00611"
	},
	{
		unicode: "ðąðūââïļ",
		plaincode: "00612"
	},
	{
		unicode: "ðąðŋââïļ",
		plaincode: "00613"
	},
	{
		unicode: "ð§",
		plaincode: "00614"
	},
	{
		unicode: "ð§ðŧ",
		plaincode: "00615"
	},
	{
		unicode: "ð§ðž",
		plaincode: "00616"
	},
	{
		unicode: "ð§ð―",
		plaincode: "00617"
	},
	{
		unicode: "ð§ðū",
		plaincode: "00618"
	},
	{
		unicode: "ð§ðŋ",
		plaincode: "00619"
	},
	{
		unicode: "ðī",
		plaincode: "00620"
	},
	{
		unicode: "ðīðŧ",
		plaincode: "00621"
	},
	{
		unicode: "ðīðž",
		plaincode: "00622"
	},
	{
		unicode: "ðīð―",
		plaincode: "00623"
	},
	{
		unicode: "ðīðū",
		plaincode: "00624"
	},
	{
		unicode: "ðīðŋ",
		plaincode: "00625"
	},
	{
		unicode: "ðĩ",
		plaincode: "00626"
	},
	{
		unicode: "ðĩðŧ",
		plaincode: "00627"
	},
	{
		unicode: "ðĩðž",
		plaincode: "00628"
	},
	{
		unicode: "ðĩð―",
		plaincode: "00629"
	},
	{
		unicode: "ðĩðū",
		plaincode: "00630"
	},
	{
		unicode: "ðĩðŋ",
		plaincode: "00631"
	},
	{
		unicode: "ð",
		plaincode: "00632"
	},
	{
		unicode: "ððŧ",
		plaincode: "00633"
	},
	{
		unicode: "ððž",
		plaincode: "00634"
	},
	{
		unicode: "ðð―",
		plaincode: "00635"
	},
	{
		unicode: "ððū",
		plaincode: "00636"
	},
	{
		unicode: "ððŋ",
		plaincode: "00637"
	},
	{
		unicode: "ðââïļ",
		plaincode: "00638"
	},
	{
		unicode: "ððŧââïļ",
		plaincode: "00639"
	},
	{
		unicode: "ððžââïļ",
		plaincode: "00640"
	},
	{
		unicode: "ðð―ââïļ",
		plaincode: "00641"
	},
	{
		unicode: "ððūââïļ",
		plaincode: "00642"
	},
	{
		unicode: "ððŋââïļ",
		plaincode: "00643"
	},
	{
		unicode: "ðââïļ",
		plaincode: "00644"
	},
	{
		unicode: "ððŧââïļ",
		plaincode: "00645"
	},
	{
		unicode: "ððžââïļ",
		plaincode: "00646"
	},
	{
		unicode: "ðð―ââïļ",
		plaincode: "00647"
	},
	{
		unicode: "ððūââïļ",
		plaincode: "00648"
	},
	{
		unicode: "ððŋââïļ",
		plaincode: "00649"
	},
	{
		unicode: "ð",
		plaincode: "00650"
	},
	{
		unicode: "ððŧ",
		plaincode: "00651"
	},
	{
		unicode: "ððž",
		plaincode: "00652"
	},
	{
		unicode: "ðð―",
		plaincode: "00653"
	},
	{
		unicode: "ððū",
		plaincode: "00654"
	},
	{
		unicode: "ððŋ",
		plaincode: "00655"
	},
	{
		unicode: "ðââïļ",
		plaincode: "00656"
	},
	{
		unicode: "ððŧââïļ",
		plaincode: "00657"
	},
	{
		unicode: "ððžââïļ",
		plaincode: "00658"
	},
	{
		unicode: "ðð―ââïļ",
		plaincode: "00659"
	},
	{
		unicode: "ððūââïļ",
		plaincode: "00660"
	},
	{
		unicode: "ððŋââïļ",
		plaincode: "00661"
	},
	{
		unicode: "ðââïļ",
		plaincode: "00662"
	},
	{
		unicode: "ððŧââïļ",
		plaincode: "00663"
	},
	{
		unicode: "ððžââïļ",
		plaincode: "00664"
	},
	{
		unicode: "ðð―ââïļ",
		plaincode: "00665"
	},
	{
		unicode: "ððūââïļ",
		plaincode: "00666"
	},
	{
		unicode: "ððŋââïļ",
		plaincode: "00667"
	},
	{
		unicode: "ð",
		plaincode: "00668"
	},
	{
		unicode: "ððŧ",
		plaincode: "00669"
	},
	{
		unicode: "ððž",
		plaincode: "00670"
	},
	{
		unicode: "ðð―",
		plaincode: "00671"
	},
	{
		unicode: "ððū",
		plaincode: "00672"
	},
	{
		unicode: "ððŋ",
		plaincode: "00673"
	},
	{
		unicode: "ðââïļ",
		plaincode: "00674"
	},
	{
		unicode: "ððŧââïļ",
		plaincode: "00675"
	},
	{
		unicode: "ððžââïļ",
		plaincode: "00676"
	},
	{
		unicode: "ðð―ââïļ",
		plaincode: "00677"
	},
	{
		unicode: "ððūââïļ",
		plaincode: "00678"
	},
	{
		unicode: "ððŋââïļ",
		plaincode: "00679"
	},
	{
		unicode: "ðââïļ",
		plaincode: "00680"
	},
	{
		unicode: "ððŧââïļ",
		plaincode: "00681"
	},
	{
		unicode: "ððžââïļ",
		plaincode: "00682"
	},
	{
		unicode: "ðð―ââïļ",
		plaincode: "00683"
	},
	{
		unicode: "ððūââïļ",
		plaincode: "00684"
	},
	{
		unicode: "ððŋââïļ",
		plaincode: "00685"
	},
	{
		unicode: "ð",
		plaincode: "00686"
	},
	{
		unicode: "ððŧ",
		plaincode: "00687"
	},
	{
		unicode: "ððž",
		plaincode: "00688"
	},
	{
		unicode: "ðð―",
		plaincode: "00689"
	},
	{
		unicode: "ððū",
		plaincode: "00690"
	},
	{
		unicode: "ððŋ",
		plaincode: "00691"
	},
	{
		unicode: "ðââïļ",
		plaincode: "00692"
	},
	{
		unicode: "ððŧââïļ",
		plaincode: "00693"
	},
	{
		unicode: "ððžââïļ",
		plaincode: "00694"
	},
	{
		unicode: "ðð―ââïļ",
		plaincode: "00695"
	},
	{
		unicode: "ððūââïļ",
		plaincode: "00696"
	},
	{
		unicode: "ððŋââïļ",
		plaincode: "00697"
	},
	{
		unicode: "ðââïļ",
		plaincode: "00698"
	},
	{
		unicode: "ððŧââïļ",
		plaincode: "00699"
	},
	{
		unicode: "ððžââïļ",
		plaincode: "00700"
	},
	{
		unicode: "ðð―ââïļ",
		plaincode: "00701"
	},
	{
		unicode: "ððūââïļ",
		plaincode: "00702"
	},
	{
		unicode: "ððŋââïļ",
		plaincode: "00703"
	},
	{
		unicode: "ð",
		plaincode: "00704"
	},
	{
		unicode: "ððŧ",
		plaincode: "00705"
	},
	{
		unicode: "ððž",
		plaincode: "00706"
	},
	{
		unicode: "ðð―",
		plaincode: "00707"
	},
	{
		unicode: "ððū",
		plaincode: "00708"
	},
	{
		unicode: "ððŋ",
		plaincode: "00709"
	},
	{
		unicode: "ðââïļ",
		plaincode: "00710"
	},
	{
		unicode: "ððŧââïļ",
		plaincode: "00711"
	},
	{
		unicode: "ððžââïļ",
		plaincode: "00712"
	},
	{
		unicode: "ðð―ââïļ",
		plaincode: "00713"
	},
	{
		unicode: "ððūââïļ",
		plaincode: "00714"
	},
	{
		unicode: "ððŋââïļ",
		plaincode: "00715"
	},
	{
		unicode: "ðââïļ",
		plaincode: "00716"
	},
	{
		unicode: "ððŧââïļ",
		plaincode: "00717"
	},
	{
		unicode: "ððžââïļ",
		plaincode: "00718"
	},
	{
		unicode: "ðð―ââïļ",
		plaincode: "00719"
	},
	{
		unicode: "ððūââïļ",
		plaincode: "00720"
	},
	{
		unicode: "ððŋââïļ",
		plaincode: "00721"
	},
	{
		unicode: "ð",
		plaincode: "00722"
	},
	{
		unicode: "ððŧ",
		plaincode: "00723"
	},
	{
		unicode: "ððž",
		plaincode: "00724"
	},
	{
		unicode: "ðð―",
		plaincode: "00725"
	},
	{
		unicode: "ððū",
		plaincode: "00726"
	},
	{
		unicode: "ððŋ",
		plaincode: "00727"
	},
	{
		unicode: "ðââïļ",
		plaincode: "00728"
	},
	{
		unicode: "ððŧââïļ",
		plaincode: "00729"
	},
	{
		unicode: "ððžââïļ",
		plaincode: "00730"
	},
	{
		unicode: "ðð―ââïļ",
		plaincode: "00731"
	},
	{
		unicode: "ððūââïļ",
		plaincode: "00732"
	},
	{
		unicode: "ððŋââïļ",
		plaincode: "00733"
	},
	{
		unicode: "ðââïļ",
		plaincode: "00734"
	},
	{
		unicode: "ððŧââïļ",
		plaincode: "00735"
	},
	{
		unicode: "ððžââïļ",
		plaincode: "00736"
	},
	{
		unicode: "ðð―ââïļ",
		plaincode: "00737"
	},
	{
		unicode: "ððūââïļ",
		plaincode: "00738"
	},
	{
		unicode: "ððŋââïļ",
		plaincode: "00739"
	},
	{
		unicode: "ð§",
		plaincode: "00740"
	},
	{
		unicode: "ð§ðŧ",
		plaincode: "00741"
	},
	{
		unicode: "ð§ðž",
		plaincode: "00742"
	},
	{
		unicode: "ð§ð―",
		plaincode: "00743"
	},
	{
		unicode: "ð§ðū",
		plaincode: "00744"
	},
	{
		unicode: "ð§ðŋ",
		plaincode: "00745"
	},
	{
		unicode: "ð§ââïļ",
		plaincode: "00746"
	},
	{
		unicode: "ð§ðŧââïļ",
		plaincode: "00747"
	},
	{
		unicode: "ð§ðžââïļ",
		plaincode: "00748"
	},
	{
		unicode: "ð§ð―ââïļ",
		plaincode: "00749"
	},
	{
		unicode: "ð§ðūââïļ",
		plaincode: "00750"
	},
	{
		unicode: "ð§ðŋââïļ",
		plaincode: "00751"
	},
	{
		unicode: "ð§ââïļ",
		plaincode: "00752"
	},
	{
		unicode: "ð§ðŧââïļ",
		plaincode: "00753"
	},
	{
		unicode: "ð§ðžââïļ",
		plaincode: "00754"
	},
	{
		unicode: "ð§ð―ââïļ",
		plaincode: "00755"
	},
	{
		unicode: "ð§ðūââïļ",
		plaincode: "00756"
	},
	{
		unicode: "ð§ðŋââïļ",
		plaincode: "00757"
	},
	{
		unicode: "ð",
		plaincode: "00758"
	},
	{
		unicode: "ððŧ",
		plaincode: "00759"
	},
	{
		unicode: "ððž",
		plaincode: "00760"
	},
	{
		unicode: "ðð―",
		plaincode: "00761"
	},
	{
		unicode: "ððū",
		plaincode: "00762"
	},
	{
		unicode: "ððŋ",
		plaincode: "00763"
	},
	{
		unicode: "ðââïļ",
		plaincode: "00764"
	},
	{
		unicode: "ððŧââïļ",
		plaincode: "00765"
	},
	{
		unicode: "ððžââïļ",
		plaincode: "00766"
	},
	{
		unicode: "ðð―ââïļ",
		plaincode: "00767"
	},
	{
		unicode: "ððūââïļ",
		plaincode: "00768"
	},
	{
		unicode: "ððŋââïļ",
		plaincode: "00769"
	},
	{
		unicode: "ðââïļ",
		plaincode: "00770"
	},
	{
		unicode: "ððŧââïļ",
		plaincode: "00771"
	},
	{
		unicode: "ððžââïļ",
		plaincode: "00772"
	},
	{
		unicode: "ðð―ââïļ",
		plaincode: "00773"
	},
	{
		unicode: "ððūââïļ",
		plaincode: "00774"
	},
	{
		unicode: "ððŋââïļ",
		plaincode: "00775"
	},
	{
		unicode: "ðĪĶ",
		plaincode: "00776"
	},
	{
		unicode: "ðĪĶðŧ",
		plaincode: "00777"
	},
	{
		unicode: "ðĪĶðž",
		plaincode: "00778"
	},
	{
		unicode: "ðĪĶð―",
		plaincode: "00779"
	},
	{
		unicode: "ðĪĶðū",
		plaincode: "00780"
	},
	{
		unicode: "ðĪĶðŋ",
		plaincode: "00781"
	},
	{
		unicode: "ðĪĶââïļ",
		plaincode: "00782"
	},
	{
		unicode: "ðĪĶðŧââïļ",
		plaincode: "00783"
	},
	{
		unicode: "ðĪĶðžââïļ",
		plaincode: "00784"
	},
	{
		unicode: "ðĪĶð―ââïļ",
		plaincode: "00785"
	},
	{
		unicode: "ðĪĶðūââïļ",
		plaincode: "00786"
	},
	{
		unicode: "ðĪĶðŋââïļ",
		plaincode: "00787"
	},
	{
		unicode: "ðĪĶââïļ",
		plaincode: "00788"
	},
	{
		unicode: "ðĪĶðŧââïļ",
		plaincode: "00789"
	},
	{
		unicode: "ðĪĶðžââïļ",
		plaincode: "00790"
	},
	{
		unicode: "ðĪĶð―ââïļ",
		plaincode: "00791"
	},
	{
		unicode: "ðĪĶðūââïļ",
		plaincode: "00792"
	},
	{
		unicode: "ðĪĶðŋââïļ",
		plaincode: "00793"
	},
	{
		unicode: "ðĪ·",
		plaincode: "00794"
	},
	{
		unicode: "ðĪ·ðŧ",
		plaincode: "00795"
	},
	{
		unicode: "ðĪ·ðž",
		plaincode: "00796"
	},
	{
		unicode: "ðĪ·ð―",
		plaincode: "00797"
	},
	{
		unicode: "ðĪ·ðū",
		plaincode: "00798"
	},
	{
		unicode: "ðĪ·ðŋ",
		plaincode: "00799"
	},
	{
		unicode: "ðĪ·ââïļ",
		plaincode: "00800"
	},
	{
		unicode: "ðĪ·ðŧââïļ",
		plaincode: "00801"
	},
	{
		unicode: "ðĪ·ðžââïļ",
		plaincode: "00802"
	},
	{
		unicode: "ðĪ·ð―ââïļ",
		plaincode: "00803"
	},
	{
		unicode: "ðĪ·ðūââïļ",
		plaincode: "00804"
	},
	{
		unicode: "ðĪ·ðŋââïļ",
		plaincode: "00805"
	},
	{
		unicode: "ðĪ·ââïļ",
		plaincode: "00806"
	},
	{
		unicode: "ðĪ·ðŧââïļ",
		plaincode: "00807"
	},
	{
		unicode: "ðĪ·ðžââïļ",
		plaincode: "00808"
	},
	{
		unicode: "ðĪ·ð―ââïļ",
		plaincode: "00809"
	},
	{
		unicode: "ðĪ·ðūââïļ",
		plaincode: "00810"
	},
	{
		unicode: "ðĪ·ðŋââïļ",
		plaincode: "00811"
	},
	{
		unicode: "ð§ââïļ",
		plaincode: "00812"
	},
	{
		unicode: "ð§ðŧââïļ",
		plaincode: "00813"
	},
	{
		unicode: "ð§ðžââïļ",
		plaincode: "00814"
	},
	{
		unicode: "ð§ð―ââïļ",
		plaincode: "00815"
	},
	{
		unicode: "ð§ðūââïļ",
		plaincode: "00816"
	},
	{
		unicode: "ð§ðŋââïļ",
		plaincode: "00817"
	},
	{
		unicode: "ðĻââïļ",
		plaincode: "00818"
	},
	{
		unicode: "ðĻðŧââïļ",
		plaincode: "00819"
	},
	{
		unicode: "ðĻðžââïļ",
		plaincode: "00820"
	},
	{
		unicode: "ðĻð―ââïļ",
		plaincode: "00821"
	},
	{
		unicode: "ðĻðūââïļ",
		plaincode: "00822"
	},
	{
		unicode: "ðĻðŋââïļ",
		plaincode: "00823"
	},
	{
		unicode: "ðĐââïļ",
		plaincode: "00824"
	},
	{
		unicode: "ðĐðŧââïļ",
		plaincode: "00825"
	},
	{
		unicode: "ðĐðžââïļ",
		plaincode: "00826"
	},
	{
		unicode: "ðĐð―ââïļ",
		plaincode: "00827"
	},
	{
		unicode: "ðĐðūââïļ",
		plaincode: "00828"
	},
	{
		unicode: "ðĐðŋââïļ",
		plaincode: "00829"
	},
	{
		unicode: "ð§âð",
		plaincode: "00830"
	},
	{
		unicode: "ð§ðŧâð",
		plaincode: "00831"
	},
	{
		unicode: "ð§ðžâð",
		plaincode: "00832"
	},
	{
		unicode: "ð§ð―âð",
		plaincode: "00833"
	},
	{
		unicode: "ð§ðūâð",
		plaincode: "00834"
	},
	{
		unicode: "ð§ðŋâð",
		plaincode: "00835"
	},
	{
		unicode: "ðĻâð",
		plaincode: "00836"
	},
	{
		unicode: "ðĻðŧâð",
		plaincode: "00837"
	},
	{
		unicode: "ðĻðžâð",
		plaincode: "00838"
	},
	{
		unicode: "ðĻð―âð",
		plaincode: "00839"
	},
	{
		unicode: "ðĻðūâð",
		plaincode: "00840"
	},
	{
		unicode: "ðĻðŋâð",
		plaincode: "00841"
	},
	{
		unicode: "ðĐâð",
		plaincode: "00842"
	},
	{
		unicode: "ðĐðŧâð",
		plaincode: "00843"
	},
	{
		unicode: "ðĐðžâð",
		plaincode: "00844"
	},
	{
		unicode: "ðĐð―âð",
		plaincode: "00845"
	},
	{
		unicode: "ðĐðūâð",
		plaincode: "00846"
	},
	{
		unicode: "ðĐðŋâð",
		plaincode: "00847"
	},
	{
		unicode: "ð§âðŦ",
		plaincode: "00848"
	},
	{
		unicode: "ð§ðŧâðŦ",
		plaincode: "00849"
	},
	{
		unicode: "ð§ðžâðŦ",
		plaincode: "00850"
	},
	{
		unicode: "ð§ð―âðŦ",
		plaincode: "00851"
	},
	{
		unicode: "ð§ðūâðŦ",
		plaincode: "00852"
	},
	{
		unicode: "ð§ðŋâðŦ",
		plaincode: "00853"
	},
	{
		unicode: "ðĻâðŦ",
		plaincode: "00854"
	},
	{
		unicode: "ðĻðŧâðŦ",
		plaincode: "00855"
	},
	{
		unicode: "ðĻðžâðŦ",
		plaincode: "00856"
	},
	{
		unicode: "ðĻð―âðŦ",
		plaincode: "00857"
	},
	{
		unicode: "ðĻðūâðŦ",
		plaincode: "00858"
	},
	{
		unicode: "ðĻðŋâðŦ",
		plaincode: "00859"
	},
	{
		unicode: "ðĐâðŦ",
		plaincode: "00860"
	},
	{
		unicode: "ðĐðŧâðŦ",
		plaincode: "00861"
	},
	{
		unicode: "ðĐðžâðŦ",
		plaincode: "00862"
	},
	{
		unicode: "ðĐð―âðŦ",
		plaincode: "00863"
	},
	{
		unicode: "ðĐðūâðŦ",
		plaincode: "00864"
	},
	{
		unicode: "ðĐðŋâðŦ",
		plaincode: "00865"
	},
	{
		unicode: "ð§ââïļ",
		plaincode: "00866"
	},
	{
		unicode: "ð§ðŧââïļ",
		plaincode: "00867"
	},
	{
		unicode: "ð§ðžââïļ",
		plaincode: "00868"
	},
	{
		unicode: "ð§ð―ââïļ",
		plaincode: "00869"
	},
	{
		unicode: "ð§ðūââïļ",
		plaincode: "00870"
	},
	{
		unicode: "ð§ðŋââïļ",
		plaincode: "00871"
	},
	{
		unicode: "ðĻââïļ",
		plaincode: "00872"
	},
	{
		unicode: "ðĻðŧââïļ",
		plaincode: "00873"
	},
	{
		unicode: "ðĻðžââïļ",
		plaincode: "00874"
	},
	{
		unicode: "ðĻð―ââïļ",
		plaincode: "00875"
	},
	{
		unicode: "ðĻðūââïļ",
		plaincode: "00876"
	},
	{
		unicode: "ðĻðŋââïļ",
		plaincode: "00877"
	},
	{
		unicode: "ðĐââïļ",
		plaincode: "00878"
	},
	{
		unicode: "ðĐðŧââïļ",
		plaincode: "00879"
	},
	{
		unicode: "ðĐðžââïļ",
		plaincode: "00880"
	},
	{
		unicode: "ðĐð―ââïļ",
		plaincode: "00881"
	},
	{
		unicode: "ðĐðūââïļ",
		plaincode: "00882"
	},
	{
		unicode: "ðĐðŋââïļ",
		plaincode: "00883"
	},
	{
		unicode: "ð§âðū",
		plaincode: "00884"
	},
	{
		unicode: "ð§ðŧâðū",
		plaincode: "00885"
	},
	{
		unicode: "ð§ðžâðū",
		plaincode: "00886"
	},
	{
		unicode: "ð§ð―âðū",
		plaincode: "00887"
	},
	{
		unicode: "ð§ðūâðū",
		plaincode: "00888"
	},
	{
		unicode: "ð§ðŋâðū",
		plaincode: "00889"
	},
	{
		unicode: "ðĻâðū",
		plaincode: "00890"
	},
	{
		unicode: "ðĻðŧâðū",
		plaincode: "00891"
	},
	{
		unicode: "ðĻðžâðū",
		plaincode: "00892"
	},
	{
		unicode: "ðĻð―âðū",
		plaincode: "00893"
	},
	{
		unicode: "ðĻðūâðū",
		plaincode: "00894"
	},
	{
		unicode: "ðĻðŋâðū",
		plaincode: "00895"
	},
	{
		unicode: "ðĐâðū",
		plaincode: "00896"
	},
	{
		unicode: "ðĐðŧâðū",
		plaincode: "00897"
	},
	{
		unicode: "ðĐðžâðū",
		plaincode: "00898"
	},
	{
		unicode: "ðĐð―âðū",
		plaincode: "00899"
	},
	{
		unicode: "ðĐðūâðū",
		plaincode: "00900"
	},
	{
		unicode: "ðĐðŋâðū",
		plaincode: "00901"
	},
	{
		unicode: "ð§âðģ",
		plaincode: "00902"
	},
	{
		unicode: "ð§ðŧâðģ",
		plaincode: "00903"
	},
	{
		unicode: "ð§ðžâðģ",
		plaincode: "00904"
	},
	{
		unicode: "ð§ð―âðģ",
		plaincode: "00905"
	},
	{
		unicode: "ð§ðūâðģ",
		plaincode: "00906"
	},
	{
		unicode: "ð§ðŋâðģ",
		plaincode: "00907"
	},
	{
		unicode: "ðĻâðģ",
		plaincode: "00908"
	},
	{
		unicode: "ðĻðŧâðģ",
		plaincode: "00909"
	},
	{
		unicode: "ðĻðžâðģ",
		plaincode: "00910"
	},
	{
		unicode: "ðĻð―âðģ",
		plaincode: "00911"
	},
	{
		unicode: "ðĻðūâðģ",
		plaincode: "00912"
	},
	{
		unicode: "ðĻðŋâðģ",
		plaincode: "00913"
	},
	{
		unicode: "ðĐâðģ",
		plaincode: "00914"
	},
	{
		unicode: "ðĐðŧâðģ",
		plaincode: "00915"
	},
	{
		unicode: "ðĐðžâðģ",
		plaincode: "00916"
	},
	{
		unicode: "ðĐð―âðģ",
		plaincode: "00917"
	},
	{
		unicode: "ðĐðūâðģ",
		plaincode: "00918"
	},
	{
		unicode: "ðĐðŋâðģ",
		plaincode: "00919"
	},
	{
		unicode: "ð§âð§",
		plaincode: "00920"
	},
	{
		unicode: "ð§ðŧâð§",
		plaincode: "00921"
	},
	{
		unicode: "ð§ðžâð§",
		plaincode: "00922"
	},
	{
		unicode: "ð§ð―âð§",
		plaincode: "00923"
	},
	{
		unicode: "ð§ðūâð§",
		plaincode: "00924"
	},
	{
		unicode: "ð§ðŋâð§",
		plaincode: "00925"
	},
	{
		unicode: "ðĻâð§",
		plaincode: "00926"
	},
	{
		unicode: "ðĻðŧâð§",
		plaincode: "00927"
	},
	{
		unicode: "ðĻðžâð§",
		plaincode: "00928"
	},
	{
		unicode: "ðĻð―âð§",
		plaincode: "00929"
	},
	{
		unicode: "ðĻðūâð§",
		plaincode: "00930"
	},
	{
		unicode: "ðĻðŋâð§",
		plaincode: "00931"
	},
	{
		unicode: "ðĐâð§",
		plaincode: "00932"
	},
	{
		unicode: "ðĐðŧâð§",
		plaincode: "00933"
	},
	{
		unicode: "ðĐðžâð§",
		plaincode: "00934"
	},
	{
		unicode: "ðĐð―âð§",
		plaincode: "00935"
	},
	{
		unicode: "ðĐðūâð§",
		plaincode: "00936"
	},
	{
		unicode: "ðĐðŋâð§",
		plaincode: "00937"
	},
	{
		unicode: "ð§âð­",
		plaincode: "00938"
	},
	{
		unicode: "ð§ðŧâð­",
		plaincode: "00939"
	},
	{
		unicode: "ð§ðžâð­",
		plaincode: "00940"
	},
	{
		unicode: "ð§ð―âð­",
		plaincode: "00941"
	},
	{
		unicode: "ð§ðūâð­",
		plaincode: "00942"
	},
	{
		unicode: "ð§ðŋâð­",
		plaincode: "00943"
	},
	{
		unicode: "ðĻâð­",
		plaincode: "00944"
	},
	{
		unicode: "ðĻðŧâð­",
		plaincode: "00945"
	},
	{
		unicode: "ðĻðžâð­",
		plaincode: "00946"
	},
	{
		unicode: "ðĻð―âð­",
		plaincode: "00947"
	},
	{
		unicode: "ðĻðūâð­",
		plaincode: "00948"
	},
	{
		unicode: "ðĻðŋâð­",
		plaincode: "00949"
	},
	{
		unicode: "ðĐâð­",
		plaincode: "00950"
	},
	{
		unicode: "ðĐðŧâð­",
		plaincode: "00951"
	},
	{
		unicode: "ðĐðžâð­",
		plaincode: "00952"
	},
	{
		unicode: "ðĐð―âð­",
		plaincode: "00953"
	},
	{
		unicode: "ðĐðūâð­",
		plaincode: "00954"
	},
	{
		unicode: "ðĐðŋâð­",
		plaincode: "00955"
	},
	{
		unicode: "ð§âðž",
		plaincode: "00956"
	},
	{
		unicode: "ð§ðŧâðž",
		plaincode: "00957"
	},
	{
		unicode: "ð§ðžâðž",
		plaincode: "00958"
	},
	{
		unicode: "ð§ð―âðž",
		plaincode: "00959"
	},
	{
		unicode: "ð§ðūâðž",
		plaincode: "00960"
	},
	{
		unicode: "ð§ðŋâðž",
		plaincode: "00961"
	},
	{
		unicode: "ðĻâðž",
		plaincode: "00962"
	},
	{
		unicode: "ðĻðŧâðž",
		plaincode: "00963"
	},
	{
		unicode: "ðĻðžâðž",
		plaincode: "00964"
	},
	{
		unicode: "ðĻð―âðž",
		plaincode: "00965"
	},
	{
		unicode: "ðĻðūâðž",
		plaincode: "00966"
	},
	{
		unicode: "ðĻðŋâðž",
		plaincode: "00967"
	},
	{
		unicode: "ðĐâðž",
		plaincode: "00968"
	},
	{
		unicode: "ðĐðŧâðž",
		plaincode: "00969"
	},
	{
		unicode: "ðĐðžâðž",
		plaincode: "00970"
	},
	{
		unicode: "ðĐð―âðž",
		plaincode: "00971"
	},
	{
		unicode: "ðĐðūâðž",
		plaincode: "00972"
	},
	{
		unicode: "ðĐðŋâðž",
		plaincode: "00973"
	},
	{
		unicode: "ð§âðŽ",
		plaincode: "00974"
	},
	{
		unicode: "ð§ðŧâðŽ",
		plaincode: "00975"
	},
	{
		unicode: "ð§ðžâðŽ",
		plaincode: "00976"
	},
	{
		unicode: "ð§ð―âðŽ",
		plaincode: "00977"
	},
	{
		unicode: "ð§ðūâðŽ",
		plaincode: "00978"
	},
	{
		unicode: "ð§ðŋâðŽ",
		plaincode: "00979"
	},
	{
		unicode: "ðĻâðŽ",
		plaincode: "00980"
	},
	{
		unicode: "ðĻðŧâðŽ",
		plaincode: "00981"
	},
	{
		unicode: "ðĻðžâðŽ",
		plaincode: "00982"
	},
	{
		unicode: "ðĻð―âðŽ",
		plaincode: "00983"
	},
	{
		unicode: "ðĻðūâðŽ",
		plaincode: "00984"
	},
	{
		unicode: "ðĻðŋâðŽ",
		plaincode: "00985"
	},
	{
		unicode: "ðĐâðŽ",
		plaincode: "00986"
	},
	{
		unicode: "ðĐðŧâðŽ",
		plaincode: "00987"
	},
	{
		unicode: "ðĐðžâðŽ",
		plaincode: "00988"
	},
	{
		unicode: "ðĐð―âðŽ",
		plaincode: "00989"
	},
	{
		unicode: "ðĐðūâðŽ",
		plaincode: "00990"
	},
	{
		unicode: "ðĐðŋâðŽ",
		plaincode: "00991"
	},
	{
		unicode: "ð§âðŧ",
		plaincode: "00992"
	},
	{
		unicode: "ð§ðŧâðŧ",
		plaincode: "00993"
	},
	{
		unicode: "ð§ðžâðŧ",
		plaincode: "00994"
	},
	{
		unicode: "ð§ð―âðŧ",
		plaincode: "00995"
	},
	{
		unicode: "ð§ðūâðŧ",
		plaincode: "00996"
	},
	{
		unicode: "ð§ðŋâðŧ",
		plaincode: "00997"
	},
	{
		unicode: "ðĻâðŧ",
		plaincode: "00998"
	},
	{
		unicode: "ðĻðŧâðŧ",
		plaincode: "00999"
	},
	{
		unicode: "ðĻðžâðŧ",
		plaincode: "01000"
	},
	{
		unicode: "ðĻð―âðŧ",
		plaincode: "01001"
	},
	{
		unicode: "ðĻðūâðŧ",
		plaincode: "01002"
	},
	{
		unicode: "ðĻðŋâðŧ",
		plaincode: "01003"
	},
	{
		unicode: "ðĐâðŧ",
		plaincode: "01004"
	},
	{
		unicode: "ðĐðŧâðŧ",
		plaincode: "01005"
	},
	{
		unicode: "ðĐðžâðŧ",
		plaincode: "01006"
	},
	{
		unicode: "ðĐð―âðŧ",
		plaincode: "01007"
	},
	{
		unicode: "ðĐðūâðŧ",
		plaincode: "01008"
	},
	{
		unicode: "ðĐðŋâðŧ",
		plaincode: "01009"
	},
	{
		unicode: "ð§âðĪ",
		plaincode: "01010"
	},
	{
		unicode: "ð§ðŧâðĪ",
		plaincode: "01011"
	},
	{
		unicode: "ð§ðžâðĪ",
		plaincode: "01012"
	},
	{
		unicode: "ð§ð―âðĪ",
		plaincode: "01013"
	},
	{
		unicode: "ð§ðūâðĪ",
		plaincode: "01014"
	},
	{
		unicode: "ð§ðŋâðĪ",
		plaincode: "01015"
	},
	{
		unicode: "ðĻâðĪ",
		plaincode: "01016"
	},
	{
		unicode: "ðĻðŧâðĪ",
		plaincode: "01017"
	},
	{
		unicode: "ðĻðžâðĪ",
		plaincode: "01018"
	},
	{
		unicode: "ðĻð―âðĪ",
		plaincode: "01019"
	},
	{
		unicode: "ðĻðūâðĪ",
		plaincode: "01020"
	},
	{
		unicode: "ðĻðŋâðĪ",
		plaincode: "01021"
	},
	{
		unicode: "ðĐâðĪ",
		plaincode: "01022"
	},
	{
		unicode: "ðĐðŧâðĪ",
		plaincode: "01023"
	},
	{
		unicode: "ðĐðžâðĪ",
		plaincode: "01024"
	},
	{
		unicode: "ðĐð―âðĪ",
		plaincode: "01025"
	},
	{
		unicode: "ðĐðūâðĪ",
		plaincode: "01026"
	},
	{
		unicode: "ðĐðŋâðĪ",
		plaincode: "01027"
	},
	{
		unicode: "ð§âðĻ",
		plaincode: "01028"
	},
	{
		unicode: "ð§ðŧâðĻ",
		plaincode: "01029"
	},
	{
		unicode: "ð§ðžâðĻ",
		plaincode: "01030"
	},
	{
		unicode: "ð§ð―âðĻ",
		plaincode: "01031"
	},
	{
		unicode: "ð§ðūâðĻ",
		plaincode: "01032"
	},
	{
		unicode: "ð§ðŋâðĻ",
		plaincode: "01033"
	},
	{
		unicode: "ðĻâðĻ",
		plaincode: "01034"
	},
	{
		unicode: "ðĻðŧâðĻ",
		plaincode: "01035"
	},
	{
		unicode: "ðĻðžâðĻ",
		plaincode: "01036"
	},
	{
		unicode: "ðĻð―âðĻ",
		plaincode: "01037"
	},
	{
		unicode: "ðĻðūâðĻ",
		plaincode: "01038"
	},
	{
		unicode: "ðĻðŋâðĻ",
		plaincode: "01039"
	},
	{
		unicode: "ðĐâðĻ",
		plaincode: "01040"
	},
	{
		unicode: "ðĐðŧâðĻ",
		plaincode: "01041"
	},
	{
		unicode: "ðĐðžâðĻ",
		plaincode: "01042"
	},
	{
		unicode: "ðĐð―âðĻ",
		plaincode: "01043"
	},
	{
		unicode: "ðĐðūâðĻ",
		plaincode: "01044"
	},
	{
		unicode: "ðĐðŋâðĻ",
		plaincode: "01045"
	},
	{
		unicode: "ð§ââïļ",
		plaincode: "01046"
	},
	{
		unicode: "ð§ðŧââïļ",
		plaincode: "01047"
	},
	{
		unicode: "ð§ðžââïļ",
		plaincode: "01048"
	},
	{
		unicode: "ð§ð―ââïļ",
		plaincode: "01049"
	},
	{
		unicode: "ð§ðūââïļ",
		plaincode: "01050"
	},
	{
		unicode: "ð§ðŋââïļ",
		plaincode: "01051"
	},
	{
		unicode: "ðĻââïļ",
		plaincode: "01052"
	},
	{
		unicode: "ðĻðŧââïļ",
		plaincode: "01053"
	},
	{
		unicode: "ðĻðžââïļ",
		plaincode: "01054"
	},
	{
		unicode: "ðĻð―ââïļ",
		plaincode: "01055"
	},
	{
		unicode: "ðĻðūââïļ",
		plaincode: "01056"
	},
	{
		unicode: "ðĻðŋââïļ",
		plaincode: "01057"
	},
	{
		unicode: "ðĐââïļ",
		plaincode: "01058"
	},
	{
		unicode: "ðĐðŧââïļ",
		plaincode: "01059"
	},
	{
		unicode: "ðĐðžââïļ",
		plaincode: "01060"
	},
	{
		unicode: "ðĐð―ââïļ",
		plaincode: "01061"
	},
	{
		unicode: "ðĐðūââïļ",
		plaincode: "01062"
	},
	{
		unicode: "ðĐðŋââïļ",
		plaincode: "01063"
	},
	{
		unicode: "ð§âð",
		plaincode: "01064"
	},
	{
		unicode: "ð§ðŧâð",
		plaincode: "01065"
	},
	{
		unicode: "ð§ðžâð",
		plaincode: "01066"
	},
	{
		unicode: "ð§ð―âð",
		plaincode: "01067"
	},
	{
		unicode: "ð§ðūâð",
		plaincode: "01068"
	},
	{
		unicode: "ð§ðŋâð",
		plaincode: "01069"
	},
	{
		unicode: "ðĻâð",
		plaincode: "01070"
	},
	{
		unicode: "ðĻðŧâð",
		plaincode: "01071"
	},
	{
		unicode: "ðĻðžâð",
		plaincode: "01072"
	},
	{
		unicode: "ðĻð―âð",
		plaincode: "01073"
	},
	{
		unicode: "ðĻðūâð",
		plaincode: "01074"
	},
	{
		unicode: "ðĻðŋâð",
		plaincode: "01075"
	},
	{
		unicode: "ðĐâð",
		plaincode: "01076"
	},
	{
		unicode: "ðĐðŧâð",
		plaincode: "01077"
	},
	{
		unicode: "ðĐðžâð",
		plaincode: "01078"
	},
	{
		unicode: "ðĐð―âð",
		plaincode: "01079"
	},
	{
		unicode: "ðĐðūâð",
		plaincode: "01080"
	},
	{
		unicode: "ðĐðŋâð",
		plaincode: "01081"
	},
	{
		unicode: "ð§âð",
		plaincode: "01082"
	},
	{
		unicode: "ð§ðŧâð",
		plaincode: "01083"
	},
	{
		unicode: "ð§ðžâð",
		plaincode: "01084"
	},
	{
		unicode: "ð§ð―âð",
		plaincode: "01085"
	},
	{
		unicode: "ð§ðūâð",
		plaincode: "01086"
	},
	{
		unicode: "ð§ðŋâð",
		plaincode: "01087"
	},
	{
		unicode: "ðĻâð",
		plaincode: "01088"
	},
	{
		unicode: "ðĻðŧâð",
		plaincode: "01089"
	},
	{
		unicode: "ðĻðžâð",
		plaincode: "01090"
	},
	{
		unicode: "ðĻð―âð",
		plaincode: "01091"
	},
	{
		unicode: "ðĻðūâð",
		plaincode: "01092"
	},
	{
		unicode: "ðĻðŋâð",
		plaincode: "01093"
	},
	{
		unicode: "ðĐâð",
		plaincode: "01094"
	},
	{
		unicode: "ðĐðŧâð",
		plaincode: "01095"
	},
	{
		unicode: "ðĐðžâð",
		plaincode: "01096"
	},
	{
		unicode: "ðĐð―âð",
		plaincode: "01097"
	},
	{
		unicode: "ðĐðūâð",
		plaincode: "01098"
	},
	{
		unicode: "ðĐðŋâð",
		plaincode: "01099"
	},
	{
		unicode: "ðŪ",
		plaincode: "01100"
	},
	{
		unicode: "ðŪðŧ",
		plaincode: "01101"
	},
	{
		unicode: "ðŪðž",
		plaincode: "01102"
	},
	{
		unicode: "ðŪð―",
		plaincode: "01103"
	},
	{
		unicode: "ðŪðū",
		plaincode: "01104"
	},
	{
		unicode: "ðŪðŋ",
		plaincode: "01105"
	},
	{
		unicode: "ðŪââïļ",
		plaincode: "01106"
	},
	{
		unicode: "ðŪðŧââïļ",
		plaincode: "01107"
	},
	{
		unicode: "ðŪðžââïļ",
		plaincode: "01108"
	},
	{
		unicode: "ðŪð―ââïļ",
		plaincode: "01109"
	},
	{
		unicode: "ðŪðūââïļ",
		plaincode: "01110"
	},
	{
		unicode: "ðŪðŋââïļ",
		plaincode: "01111"
	},
	{
		unicode: "ðŪââïļ",
		plaincode: "01112"
	},
	{
		unicode: "ðŪðŧââïļ",
		plaincode: "01113"
	},
	{
		unicode: "ðŪðžââïļ",
		plaincode: "01114"
	},
	{
		unicode: "ðŪð―ââïļ",
		plaincode: "01115"
	},
	{
		unicode: "ðŪðūââïļ",
		plaincode: "01116"
	},
	{
		unicode: "ðŪðŋââïļ",
		plaincode: "01117"
	},
	{
		unicode: "ðĩðŧ",
		plaincode: "01118"
	},
	{
		unicode: "ðĩðž",
		plaincode: "01119"
	},
	{
		unicode: "ðĩð―",
		plaincode: "01120"
	},
	{
		unicode: "ðĩðū",
		plaincode: "01121"
	},
	{
		unicode: "ðĩðŋ",
		plaincode: "01122"
	},
	{
		unicode: "ðĩïļââïļ",
		plaincode: "01123"
	},
	{
		unicode: "ðĩðŧââïļ",
		plaincode: "01124"
	},
	{
		unicode: "ðĩðžââïļ",
		plaincode: "01125"
	},
	{
		unicode: "ðĩð―ââïļ",
		plaincode: "01126"
	},
	{
		unicode: "ðĩðūââïļ",
		plaincode: "01127"
	},
	{
		unicode: "ðĩðŋââïļ",
		plaincode: "01128"
	},
	{
		unicode: "ðĩïļââïļ",
		plaincode: "01129"
	},
	{
		unicode: "ðĩðŧââïļ",
		plaincode: "01130"
	},
	{
		unicode: "ðĩðžââïļ",
		plaincode: "01131"
	},
	{
		unicode: "ðĩð―ââïļ",
		plaincode: "01132"
	},
	{
		unicode: "ðĩðūââïļ",
		plaincode: "01133"
	},
	{
		unicode: "ðĩðŋââïļ",
		plaincode: "01134"
	},
	{
		unicode: "ð",
		plaincode: "01135"
	},
	{
		unicode: "ððŧ",
		plaincode: "01136"
	},
	{
		unicode: "ððž",
		plaincode: "01137"
	},
	{
		unicode: "ðð―",
		plaincode: "01138"
	},
	{
		unicode: "ððū",
		plaincode: "01139"
	},
	{
		unicode: "ððŋ",
		plaincode: "01140"
	},
	{
		unicode: "ðââïļ",
		plaincode: "01141"
	},
	{
		unicode: "ððŧââïļ",
		plaincode: "01142"
	},
	{
		unicode: "ððžââïļ",
		plaincode: "01143"
	},
	{
		unicode: "ðð―ââïļ",
		plaincode: "01144"
	},
	{
		unicode: "ððūââïļ",
		plaincode: "01145"
	},
	{
		unicode: "ððŋââïļ",
		plaincode: "01146"
	},
	{
		unicode: "ðââïļ",
		plaincode: "01147"
	},
	{
		unicode: "ððŧââïļ",
		plaincode: "01148"
	},
	{
		unicode: "ððžââïļ",
		plaincode: "01149"
	},
	{
		unicode: "ðð―ââïļ",
		plaincode: "01150"
	},
	{
		unicode: "ððūââïļ",
		plaincode: "01151"
	},
	{
		unicode: "ððŋââïļ",
		plaincode: "01152"
	},
	{
		unicode: "ðĨ·",
		plaincode: "01153"
	},
	{
		unicode: "ðĨ·ðŧ",
		plaincode: "01154"
	},
	{
		unicode: "ðĨ·ðž",
		plaincode: "01155"
	},
	{
		unicode: "ðĨ·ð―",
		plaincode: "01156"
	},
	{
		unicode: "ðĨ·ðū",
		plaincode: "01157"
	},
	{
		unicode: "ðĨ·ðŋ",
		plaincode: "01158"
	},
	{
		unicode: "ð·",
		plaincode: "01159"
	},
	{
		unicode: "ð·ðŧ",
		plaincode: "01160"
	},
	{
		unicode: "ð·ðž",
		plaincode: "01161"
	},
	{
		unicode: "ð·ð―",
		plaincode: "01162"
	},
	{
		unicode: "ð·ðū",
		plaincode: "01163"
	},
	{
		unicode: "ð·ðŋ",
		plaincode: "01164"
	},
	{
		unicode: "ð·ââïļ",
		plaincode: "01165"
	},
	{
		unicode: "ð·ðŧââïļ",
		plaincode: "01166"
	},
	{
		unicode: "ð·ðžââïļ",
		plaincode: "01167"
	},
	{
		unicode: "ð·ð―ââïļ",
		plaincode: "01168"
	},
	{
		unicode: "ð·ðūââïļ",
		plaincode: "01169"
	},
	{
		unicode: "ð·ðŋââïļ",
		plaincode: "01170"
	},
	{
		unicode: "ð·ââïļ",
		plaincode: "01171"
	},
	{
		unicode: "ð·ðŧââïļ",
		plaincode: "01172"
	},
	{
		unicode: "ð·ðžââïļ",
		plaincode: "01173"
	},
	{
		unicode: "ð·ð―ââïļ",
		plaincode: "01174"
	},
	{
		unicode: "ð·ðūââïļ",
		plaincode: "01175"
	},
	{
		unicode: "ð·ðŋââïļ",
		plaincode: "01176"
	},
	{
		unicode: "ðŦ",
		plaincode: "01177"
	},
	{
		unicode: "ðŦðŧ",
		plaincode: "01178"
	},
	{
		unicode: "ðŦðž",
		plaincode: "01179"
	},
	{
		unicode: "ðŦð―",
		plaincode: "01180"
	},
	{
		unicode: "ðŦðū",
		plaincode: "01181"
	},
	{
		unicode: "ðŦðŋ",
		plaincode: "01182"
	},
	{
		unicode: "ðĪī",
		plaincode: "01183"
	},
	{
		unicode: "ðĪīðŧ",
		plaincode: "01184"
	},
	{
		unicode: "ðĪīðž",
		plaincode: "01185"
	},
	{
		unicode: "ðĪīð―",
		plaincode: "01186"
	},
	{
		unicode: "ðĪīðū",
		plaincode: "01187"
	},
	{
		unicode: "ðĪīðŋ",
		plaincode: "01188"
	},
	{
		unicode: "ðļ",
		plaincode: "01189"
	},
	{
		unicode: "ðļðŧ",
		plaincode: "01190"
	},
	{
		unicode: "ðļðž",
		plaincode: "01191"
	},
	{
		unicode: "ðļð―",
		plaincode: "01192"
	},
	{
		unicode: "ðļðū",
		plaincode: "01193"
	},
	{
		unicode: "ðļðŋ",
		plaincode: "01194"
	},
	{
		unicode: "ðģ",
		plaincode: "01195"
	},
	{
		unicode: "ðģðŧ",
		plaincode: "01196"
	},
	{
		unicode: "ðģðž",
		plaincode: "01197"
	},
	{
		unicode: "ðģð―",
		plaincode: "01198"
	},
	{
		unicode: "ðģðū",
		plaincode: "01199"
	},
	{
		unicode: "ðģðŋ",
		plaincode: "01200"
	},
	{
		unicode: "ðģââïļ",
		plaincode: "01201"
	},
	{
		unicode: "ðģðŧââïļ",
		plaincode: "01202"
	},
	{
		unicode: "ðģðžââïļ",
		plaincode: "01203"
	},
	{
		unicode: "ðģð―ââïļ",
		plaincode: "01204"
	},
	{
		unicode: "ðģðūââïļ",
		plaincode: "01205"
	},
	{
		unicode: "ðģðŋââïļ",
		plaincode: "01206"
	},
	{
		unicode: "ðģââïļ",
		plaincode: "01207"
	},
	{
		unicode: "ðģðŧââïļ",
		plaincode: "01208"
	},
	{
		unicode: "ðģðžââïļ",
		plaincode: "01209"
	},
	{
		unicode: "ðģð―ââïļ",
		plaincode: "01210"
	},
	{
		unicode: "ðģðūââïļ",
		plaincode: "01211"
	},
	{
		unicode: "ðģðŋââïļ",
		plaincode: "01212"
	},
	{
		unicode: "ðē",
		plaincode: "01213"
	},
	{
		unicode: "ðēðŧ",
		plaincode: "01214"
	},
	{
		unicode: "ðēðž",
		plaincode: "01215"
	},
	{
		unicode: "ðēð―",
		plaincode: "01216"
	},
	{
		unicode: "ðēðū",
		plaincode: "01217"
	},
	{
		unicode: "ðēðŋ",
		plaincode: "01218"
	},
	{
		unicode: "ð§",
		plaincode: "01219"
	},
	{
		unicode: "ð§ðŧ",
		plaincode: "01220"
	},
	{
		unicode: "ð§ðž",
		plaincode: "01221"
	},
	{
		unicode: "ð§ð―",
		plaincode: "01222"
	},
	{
		unicode: "ð§ðū",
		plaincode: "01223"
	},
	{
		unicode: "ð§ðŋ",
		plaincode: "01224"
	},
	{
		unicode: "ðĪĩ",
		plaincode: "01225"
	},
	{
		unicode: "ðĪĩðŧ",
		plaincode: "01226"
	},
	{
		unicode: "ðĪĩðž",
		plaincode: "01227"
	},
	{
		unicode: "ðĪĩð―",
		plaincode: "01228"
	},
	{
		unicode: "ðĪĩðū",
		plaincode: "01229"
	},
	{
		unicode: "ðĪĩðŋ",
		plaincode: "01230"
	},
	{
		unicode: "ðĪĩââïļ",
		plaincode: "01231"
	},
	{
		unicode: "ðĪĩðŧââïļ",
		plaincode: "01232"
	},
	{
		unicode: "ðĪĩðžââïļ",
		plaincode: "01233"
	},
	{
		unicode: "ðĪĩð―ââïļ",
		plaincode: "01234"
	},
	{
		unicode: "ðĪĩðūââïļ",
		plaincode: "01235"
	},
	{
		unicode: "ðĪĩðŋââïļ",
		plaincode: "01236"
	},
	{
		unicode: "ðĪĩââïļ",
		plaincode: "01237"
	},
	{
		unicode: "ðĪĩðŧââïļ",
		plaincode: "01238"
	},
	{
		unicode: "ðĪĩðžââïļ",
		plaincode: "01239"
	},
	{
		unicode: "ðĪĩð―ââïļ",
		plaincode: "01240"
	},
	{
		unicode: "ðĪĩðūââïļ",
		plaincode: "01241"
	},
	{
		unicode: "ðĪĩðŋââïļ",
		plaincode: "01242"
	},
	{
		unicode: "ð°",
		plaincode: "01243"
	},
	{
		unicode: "ð°ðŧ",
		plaincode: "01244"
	},
	{
		unicode: "ð°ðž",
		plaincode: "01245"
	},
	{
		unicode: "ð°ð―",
		plaincode: "01246"
	},
	{
		unicode: "ð°ðū",
		plaincode: "01247"
	},
	{
		unicode: "ð°ðŋ",
		plaincode: "01248"
	},
	{
		unicode: "ð°ââïļ",
		plaincode: "01249"
	},
	{
		unicode: "ð°ðŧââïļ",
		plaincode: "01250"
	},
	{
		unicode: "ð°ðžââïļ",
		plaincode: "01251"
	},
	{
		unicode: "ð°ð―ââïļ",
		plaincode: "01252"
	},
	{
		unicode: "ð°ðūââïļ",
		plaincode: "01253"
	},
	{
		unicode: "ð°ðŋââïļ",
		plaincode: "01254"
	},
	{
		unicode: "ð°ââïļ",
		plaincode: "01255"
	},
	{
		unicode: "ð°ðŧââïļ",
		plaincode: "01256"
	},
	{
		unicode: "ð°ðžââïļ",
		plaincode: "01257"
	},
	{
		unicode: "ð°ð―ââïļ",
		plaincode: "01258"
	},
	{
		unicode: "ð°ðūââïļ",
		plaincode: "01259"
	},
	{
		unicode: "ð°ðŋââïļ",
		plaincode: "01260"
	},
	{
		unicode: "ðĪ°",
		plaincode: "01261"
	},
	{
		unicode: "ðĪ°ðŧ",
		plaincode: "01262"
	},
	{
		unicode: "ðĪ°ðž",
		plaincode: "01263"
	},
	{
		unicode: "ðĪ°ð―",
		plaincode: "01264"
	},
	{
		unicode: "ðĪ°ðū",
		plaincode: "01265"
	},
	{
		unicode: "ðĪ°ðŋ",
		plaincode: "01266"
	},
	{
		unicode: "ðŦ",
		plaincode: "01267"
	},
	{
		unicode: "ðŦðŧ",
		plaincode: "01268"
	},
	{
		unicode: "ðŦðž",
		plaincode: "01269"
	},
	{
		unicode: "ðŦð―",
		plaincode: "01270"
	},
	{
		unicode: "ðŦðū",
		plaincode: "01271"
	},
	{
		unicode: "ðŦðŋ",
		plaincode: "01272"
	},
	{
		unicode: "ðŦ",
		plaincode: "01273"
	},
	{
		unicode: "ðŦðŧ",
		plaincode: "01274"
	},
	{
		unicode: "ðŦðž",
		plaincode: "01275"
	},
	{
		unicode: "ðŦð―",
		plaincode: "01276"
	},
	{
		unicode: "ðŦðū",
		plaincode: "01277"
	},
	{
		unicode: "ðŦðŋ",
		plaincode: "01278"
	},
	{
		unicode: "ðĪą",
		plaincode: "01279"
	},
	{
		unicode: "ðĪąðŧ",
		plaincode: "01280"
	},
	{
		unicode: "ðĪąðž",
		plaincode: "01281"
	},
	{
		unicode: "ðĪąð―",
		plaincode: "01282"
	},
	{
		unicode: "ðĪąðū",
		plaincode: "01283"
	},
	{
		unicode: "ðĪąðŋ",
		plaincode: "01284"
	},
	{
		unicode: "ðĐâðž",
		plaincode: "01285"
	},
	{
		unicode: "ðĐðŧâðž",
		plaincode: "01286"
	},
	{
		unicode: "ðĐðžâðž",
		plaincode: "01287"
	},
	{
		unicode: "ðĐð―âðž",
		plaincode: "01288"
	},
	{
		unicode: "ðĐðūâðž",
		plaincode: "01289"
	},
	{
		unicode: "ðĐðŋâðž",
		plaincode: "01290"
	},
	{
		unicode: "ðĻâðž",
		plaincode: "01291"
	},
	{
		unicode: "ðĻðŧâðž",
		plaincode: "01292"
	},
	{
		unicode: "ðĻðžâðž",
		plaincode: "01293"
	},
	{
		unicode: "ðĻð―âðž",
		plaincode: "01294"
	},
	{
		unicode: "ðĻðūâðž",
		plaincode: "01295"
	},
	{
		unicode: "ðĻðŋâðž",
		plaincode: "01296"
	},
	{
		unicode: "ð§âðž",
		plaincode: "01297"
	},
	{
		unicode: "ð§ðŧâðž",
		plaincode: "01298"
	},
	{
		unicode: "ð§ðžâðž",
		plaincode: "01299"
	},
	{
		unicode: "ð§ð―âðž",
		plaincode: "01300"
	},
	{
		unicode: "ð§ðūâðž",
		plaincode: "01301"
	},
	{
		unicode: "ð§ðŋâðž",
		plaincode: "01302"
	},
	{
		unicode: "ðž",
		plaincode: "01303"
	},
	{
		unicode: "ðžðŧ",
		plaincode: "01304"
	},
	{
		unicode: "ðžðž",
		plaincode: "01305"
	},
	{
		unicode: "ðžð―",
		plaincode: "01306"
	},
	{
		unicode: "ðžðū",
		plaincode: "01307"
	},
	{
		unicode: "ðžðŋ",
		plaincode: "01308"
	},
	{
		unicode: "ð",
		plaincode: "01309"
	},
	{
		unicode: "ððŧ",
		plaincode: "01310"
	},
	{
		unicode: "ððž",
		plaincode: "01311"
	},
	{
		unicode: "ðð―",
		plaincode: "01312"
	},
	{
		unicode: "ððū",
		plaincode: "01313"
	},
	{
		unicode: "ððŋ",
		plaincode: "01314"
	},
	{
		unicode: "ðĪķ",
		plaincode: "01315"
	},
	{
		unicode: "ðĪķðŧ",
		plaincode: "01316"
	},
	{
		unicode: "ðĪķðž",
		plaincode: "01317"
	},
	{
		unicode: "ðĪķð―",
		plaincode: "01318"
	},
	{
		unicode: "ðĪķðū",
		plaincode: "01319"
	},
	{
		unicode: "ðĪķðŋ",
		plaincode: "01320"
	},
	{
		unicode: "ð§âð",
		plaincode: "01321"
	},
	{
		unicode: "ð§ðŧâð",
		plaincode: "01322"
	},
	{
		unicode: "ð§ðžâð",
		plaincode: "01323"
	},
	{
		unicode: "ð§ð―âð",
		plaincode: "01324"
	},
	{
		unicode: "ð§ðūâð",
		plaincode: "01325"
	},
	{
		unicode: "ð§ðŋâð",
		plaincode: "01326"
	},
	{
		unicode: "ðĶļ",
		plaincode: "01327"
	},
	{
		unicode: "ðĶļðŧ",
		plaincode: "01328"
	},
	{
		unicode: "ðĶļðž",
		plaincode: "01329"
	},
	{
		unicode: "ðĶļð―",
		plaincode: "01330"
	},
	{
		unicode: "ðĶļðū",
		plaincode: "01331"
	},
	{
		unicode: "ðĶļðŋ",
		plaincode: "01332"
	},
	{
		unicode: "ðĶļââïļ",
		plaincode: "01333"
	},
	{
		unicode: "ðĶļðŧââïļ",
		plaincode: "01334"
	},
	{
		unicode: "ðĶļðžââïļ",
		plaincode: "01335"
	},
	{
		unicode: "ðĶļð―ââïļ",
		plaincode: "01336"
	},
	{
		unicode: "ðĶļðūââïļ",
		plaincode: "01337"
	},
	{
		unicode: "ðĶļðŋââïļ",
		plaincode: "01338"
	},
	{
		unicode: "ðĶļââïļ",
		plaincode: "01339"
	},
	{
		unicode: "ðĶļðŧââïļ",
		plaincode: "01340"
	},
	{
		unicode: "ðĶļðžââïļ",
		plaincode: "01341"
	},
	{
		unicode: "ðĶļð―ââïļ",
		plaincode: "01342"
	},
	{
		unicode: "ðĶļðūââïļ",
		plaincode: "01343"
	},
	{
		unicode: "ðĶļðŋââïļ",
		plaincode: "01344"
	},
	{
		unicode: "ðĶđ",
		plaincode: "01345"
	},
	{
		unicode: "ðĶđðŧ",
		plaincode: "01346"
	},
	{
		unicode: "ðĶđðž",
		plaincode: "01347"
	},
	{
		unicode: "ðĶđð―",
		plaincode: "01348"
	},
	{
		unicode: "ðĶđðū",
		plaincode: "01349"
	},
	{
		unicode: "ðĶđðŋ",
		plaincode: "01350"
	},
	{
		unicode: "ðĶđââïļ",
		plaincode: "01351"
	},
	{
		unicode: "ðĶđðŧââïļ",
		plaincode: "01352"
	},
	{
		unicode: "ðĶđðžââïļ",
		plaincode: "01353"
	},
	{
		unicode: "ðĶđð―ââïļ",
		plaincode: "01354"
	},
	{
		unicode: "ðĶđðūââïļ",
		plaincode: "01355"
	},
	{
		unicode: "ðĶđðŋââïļ",
		plaincode: "01356"
	},
	{
		unicode: "ðĶđââïļ",
		plaincode: "01357"
	},
	{
		unicode: "ðĶđðŧââïļ",
		plaincode: "01358"
	},
	{
		unicode: "ðĶđðžââïļ",
		plaincode: "01359"
	},
	{
		unicode: "ðĶđð―ââïļ",
		plaincode: "01360"
	},
	{
		unicode: "ðĶđðūââïļ",
		plaincode: "01361"
	},
	{
		unicode: "ðĶđðŋââïļ",
		plaincode: "01362"
	},
	{
		unicode: "ð§",
		plaincode: "01363"
	},
	{
		unicode: "ð§ðŧ",
		plaincode: "01364"
	},
	{
		unicode: "ð§ðž",
		plaincode: "01365"
	},
	{
		unicode: "ð§ð―",
		plaincode: "01366"
	},
	{
		unicode: "ð§ðū",
		plaincode: "01367"
	},
	{
		unicode: "ð§ðŋ",
		plaincode: "01368"
	},
	{
		unicode: "ð§ââïļ",
		plaincode: "01369"
	},
	{
		unicode: "ð§ðŧââïļ",
		plaincode: "01370"
	},
	{
		unicode: "ð§ðžââïļ",
		plaincode: "01371"
	},
	{
		unicode: "ð§ð―ââïļ",
		plaincode: "01372"
	},
	{
		unicode: "ð§ðūââïļ",
		plaincode: "01373"
	},
	{
		unicode: "ð§ðŋââïļ",
		plaincode: "01374"
	},
	{
		unicode: "ð§ââïļ",
		plaincode: "01375"
	},
	{
		unicode: "ð§ðŧââïļ",
		plaincode: "01376"
	},
	{
		unicode: "ð§ðžââïļ",
		plaincode: "01377"
	},
	{
		unicode: "ð§ð―ââïļ",
		plaincode: "01378"
	},
	{
		unicode: "ð§ðūââïļ",
		plaincode: "01379"
	},
	{
		unicode: "ð§ðŋââïļ",
		plaincode: "01380"
	},
	{
		unicode: "ð§",
		plaincode: "01381"
	},
	{
		unicode: "ð§ðŧ",
		plaincode: "01382"
	},
	{
		unicode: "ð§ðž",
		plaincode: "01383"
	},
	{
		unicode: "ð§ð―",
		plaincode: "01384"
	},
	{
		unicode: "ð§ðū",
		plaincode: "01385"
	},
	{
		unicode: "ð§ðŋ",
		plaincode: "01386"
	},
	{
		unicode: "ð§ââïļ",
		plaincode: "01387"
	},
	{
		unicode: "ð§ðŧââïļ",
		plaincode: "01388"
	},
	{
		unicode: "ð§ðžââïļ",
		plaincode: "01389"
	},
	{
		unicode: "ð§ð―ââïļ",
		plaincode: "01390"
	},
	{
		unicode: "ð§ðūââïļ",
		plaincode: "01391"
	},
	{
		unicode: "ð§ðŋââïļ",
		plaincode: "01392"
	},
	{
		unicode: "ð§ââïļ",
		plaincode: "01393"
	},
	{
		unicode: "ð§ðŧââïļ",
		plaincode: "01394"
	},
	{
		unicode: "ð§ðžââïļ",
		plaincode: "01395"
	},
	{
		unicode: "ð§ð―ââïļ",
		plaincode: "01396"
	},
	{
		unicode: "ð§ðūââïļ",
		plaincode: "01397"
	},
	{
		unicode: "ð§ðŋââïļ",
		plaincode: "01398"
	},
	{
		unicode: "ð§",
		plaincode: "01399"
	},
	{
		unicode: "ð§ðŧ",
		plaincode: "01400"
	},
	{
		unicode: "ð§ðž",
		plaincode: "01401"
	},
	{
		unicode: "ð§ð―",
		plaincode: "01402"
	},
	{
		unicode: "ð§ðū",
		plaincode: "01403"
	},
	{
		unicode: "ð§ðŋ",
		plaincode: "01404"
	},
	{
		unicode: "ð§ââïļ",
		plaincode: "01405"
	},
	{
		unicode: "ð§ðŧââïļ",
		plaincode: "01406"
	},
	{
		unicode: "ð§ðžââïļ",
		plaincode: "01407"
	},
	{
		unicode: "ð§ð―ââïļ",
		plaincode: "01408"
	},
	{
		unicode: "ð§ðūââïļ",
		plaincode: "01409"
	},
	{
		unicode: "ð§ðŋââïļ",
		plaincode: "01410"
	},
	{
		unicode: "ð§ââïļ",
		plaincode: "01411"
	},
	{
		unicode: "ð§ðŧââïļ",
		plaincode: "01412"
	},
	{
		unicode: "ð§ðžââïļ",
		plaincode: "01413"
	},
	{
		unicode: "ð§ð―ââïļ",
		plaincode: "01414"
	},
	{
		unicode: "ð§ðūââïļ",
		plaincode: "01415"
	},
	{
		unicode: "ð§ðŋââïļ",
		plaincode: "01416"
	},
	{
		unicode: "ð§",
		plaincode: "01417"
	},
	{
		unicode: "ð§ðŧ",
		plaincode: "01418"
	},
	{
		unicode: "ð§ðž",
		plaincode: "01419"
	},
	{
		unicode: "ð§ð―",
		plaincode: "01420"
	},
	{
		unicode: "ð§ðū",
		plaincode: "01421"
	},
	{
		unicode: "ð§ðŋ",
		plaincode: "01422"
	},
	{
		unicode: "ð§ââïļ",
		plaincode: "01423"
	},
	{
		unicode: "ð§ðŧââïļ",
		plaincode: "01424"
	},
	{
		unicode: "ð§ðžââïļ",
		plaincode: "01425"
	},
	{
		unicode: "ð§ð―ââïļ",
		plaincode: "01426"
	},
	{
		unicode: "ð§ðūââïļ",
		plaincode: "01427"
	},
	{
		unicode: "ð§ðŋââïļ",
		plaincode: "01428"
	},
	{
		unicode: "ð§ââïļ",
		plaincode: "01429"
	},
	{
		unicode: "ð§ðŧââïļ",
		plaincode: "01430"
	},
	{
		unicode: "ð§ðžââïļ",
		plaincode: "01431"
	},
	{
		unicode: "ð§ð―ââïļ",
		plaincode: "01432"
	},
	{
		unicode: "ð§ðūââïļ",
		plaincode: "01433"
	},
	{
		unicode: "ð§ðŋââïļ",
		plaincode: "01434"
	},
	{
		unicode: "ð§",
		plaincode: "01435"
	},
	{
		unicode: "ð§ðŧ",
		plaincode: "01436"
	},
	{
		unicode: "ð§ðž",
		plaincode: "01437"
	},
	{
		unicode: "ð§ð―",
		plaincode: "01438"
	},
	{
		unicode: "ð§ðū",
		plaincode: "01439"
	},
	{
		unicode: "ð§ðŋ",
		plaincode: "01440"
	},
	{
		unicode: "ð§ââïļ",
		plaincode: "01441"
	},
	{
		unicode: "ð§ðŧââïļ",
		plaincode: "01442"
	},
	{
		unicode: "ð§ðžââïļ",
		plaincode: "01443"
	},
	{
		unicode: "ð§ð―ââïļ",
		plaincode: "01444"
	},
	{
		unicode: "ð§ðūââïļ",
		plaincode: "01445"
	},
	{
		unicode: "ð§ðŋââïļ",
		plaincode: "01446"
	},
	{
		unicode: "ð§ââïļ",
		plaincode: "01447"
	},
	{
		unicode: "ð§ðŧââïļ",
		plaincode: "01448"
	},
	{
		unicode: "ð§ðžââïļ",
		plaincode: "01449"
	},
	{
		unicode: "ð§ð―ââïļ",
		plaincode: "01450"
	},
	{
		unicode: "ð§ðūââïļ",
		plaincode: "01451"
	},
	{
		unicode: "ð§ðŋââïļ",
		plaincode: "01452"
	},
	{
		unicode: "ð§",
		plaincode: "01453"
	},
	{
		unicode: "ð§ââïļ",
		plaincode: "01454"
	},
	{
		unicode: "ð§ââïļ",
		plaincode: "01455"
	},
	{
		unicode: "ð§",
		plaincode: "01456"
	},
	{
		unicode: "ð§ââïļ",
		plaincode: "01457"
	},
	{
		unicode: "ð§ââïļ",
		plaincode: "01458"
	},
	{
		unicode: "ð§",
		plaincode: "01459"
	},
	{
		unicode: "ð",
		plaincode: "01460"
	},
	{
		unicode: "ððŧ",
		plaincode: "01461"
	},
	{
		unicode: "ððž",
		plaincode: "01462"
	},
	{
		unicode: "ðð―",
		plaincode: "01463"
	},
	{
		unicode: "ððū",
		plaincode: "01464"
	},
	{
		unicode: "ððŋ",
		plaincode: "01465"
	},
	{
		unicode: "ðââïļ",
		plaincode: "01466"
	},
	{
		unicode: "ððŧââïļ",
		plaincode: "01467"
	},
	{
		unicode: "ððžââïļ",
		plaincode: "01468"
	},
	{
		unicode: "ðð―ââïļ",
		plaincode: "01469"
	},
	{
		unicode: "ððūââïļ",
		plaincode: "01470"
	},
	{
		unicode: "ððŋââïļ",
		plaincode: "01471"
	},
	{
		unicode: "ðââïļ",
		plaincode: "01472"
	},
	{
		unicode: "ððŧââïļ",
		plaincode: "01473"
	},
	{
		unicode: "ððžââïļ",
		plaincode: "01474"
	},
	{
		unicode: "ðð―ââïļ",
		plaincode: "01475"
	},
	{
		unicode: "ððūââïļ",
		plaincode: "01476"
	},
	{
		unicode: "ððŋââïļ",
		plaincode: "01477"
	},
	{
		unicode: "ð",
		plaincode: "01478"
	},
	{
		unicode: "ððŧ",
		plaincode: "01479"
	},
	{
		unicode: "ððž",
		plaincode: "01480"
	},
	{
		unicode: "ðð―",
		plaincode: "01481"
	},
	{
		unicode: "ððū",
		plaincode: "01482"
	},
	{
		unicode: "ððŋ",
		plaincode: "01483"
	},
	{
		unicode: "ðââïļ",
		plaincode: "01484"
	},
	{
		unicode: "ððŧââïļ",
		plaincode: "01485"
	},
	{
		unicode: "ððžââïļ",
		plaincode: "01486"
	},
	{
		unicode: "ðð―ââïļ",
		plaincode: "01487"
	},
	{
		unicode: "ððūââïļ",
		plaincode: "01488"
	},
	{
		unicode: "ððŋââïļ",
		plaincode: "01489"
	},
	{
		unicode: "ðââïļ",
		plaincode: "01490"
	},
	{
		unicode: "ððŧââïļ",
		plaincode: "01491"
	},
	{
		unicode: "ððžââïļ",
		plaincode: "01492"
	},
	{
		unicode: "ðð―ââïļ",
		plaincode: "01493"
	},
	{
		unicode: "ððūââïļ",
		plaincode: "01494"
	},
	{
		unicode: "ððŋââïļ",
		plaincode: "01495"
	},
	{
		unicode: "ðķ",
		plaincode: "01496"
	},
	{
		unicode: "ðķðŧ",
		plaincode: "01497"
	},
	{
		unicode: "ðķðž",
		plaincode: "01498"
	},
	{
		unicode: "ðķð―",
		plaincode: "01499"
	},
	{
		unicode: "ðķðū",
		plaincode: "01500"
	},
	{
		unicode: "ðķðŋ",
		plaincode: "01501"
	},
	{
		unicode: "ðķââïļ",
		plaincode: "01502"
	},
	{
		unicode: "ðķðŧââïļ",
		plaincode: "01503"
	},
	{
		unicode: "ðķðžââïļ",
		plaincode: "01504"
	},
	{
		unicode: "ðķð―ââïļ",
		plaincode: "01505"
	},
	{
		unicode: "ðķðūââïļ",
		plaincode: "01506"
	},
	{
		unicode: "ðķðŋââïļ",
		plaincode: "01507"
	},
	{
		unicode: "ðķââïļ",
		plaincode: "01508"
	},
	{
		unicode: "ðķðŧââïļ",
		plaincode: "01509"
	},
	{
		unicode: "ðķðžââïļ",
		plaincode: "01510"
	},
	{
		unicode: "ðķð―ââïļ",
		plaincode: "01511"
	},
	{
		unicode: "ðķðūââïļ",
		plaincode: "01512"
	},
	{
		unicode: "ðķðŋââïļ",
		plaincode: "01513"
	},
	{
		unicode: "ð§",
		plaincode: "01514"
	},
	{
		unicode: "ð§ðŧ",
		plaincode: "01515"
	},
	{
		unicode: "ð§ðž",
		plaincode: "01516"
	},
	{
		unicode: "ð§ð―",
		plaincode: "01517"
	},
	{
		unicode: "ð§ðū",
		plaincode: "01518"
	},
	{
		unicode: "ð§ðŋ",
		plaincode: "01519"
	},
	{
		unicode: "ð§ââïļ",
		plaincode: "01520"
	},
	{
		unicode: "ð§ðŧââïļ",
		plaincode: "01521"
	},
	{
		unicode: "ð§ðžââïļ",
		plaincode: "01522"
	},
	{
		unicode: "ð§ð―ââïļ",
		plaincode: "01523"
	},
	{
		unicode: "ð§ðūââïļ",
		plaincode: "01524"
	},
	{
		unicode: "ð§ðŋââïļ",
		plaincode: "01525"
	},
	{
		unicode: "ð§ââïļ",
		plaincode: "01526"
	},
	{
		unicode: "ð§ðŧââïļ",
		plaincode: "01527"
	},
	{
		unicode: "ð§ðžââïļ",
		plaincode: "01528"
	},
	{
		unicode: "ð§ð―ââïļ",
		plaincode: "01529"
	},
	{
		unicode: "ð§ðūââïļ",
		plaincode: "01530"
	},
	{
		unicode: "ð§ðŋââïļ",
		plaincode: "01531"
	},
	{
		unicode: "ð§",
		plaincode: "01532"
	},
	{
		unicode: "ð§ðŧ",
		plaincode: "01533"
	},
	{
		unicode: "ð§ðž",
		plaincode: "01534"
	},
	{
		unicode: "ð§ð―",
		plaincode: "01535"
	},
	{
		unicode: "ð§ðū",
		plaincode: "01536"
	},
	{
		unicode: "ð§ðŋ",
		plaincode: "01537"
	},
	{
		unicode: "ð§ââïļ",
		plaincode: "01538"
	},
	{
		unicode: "ð§ðŧââïļ",
		plaincode: "01539"
	},
	{
		unicode: "ð§ðžââïļ",
		plaincode: "01540"
	},
	{
		unicode: "ð§ð―ââïļ",
		plaincode: "01541"
	},
	{
		unicode: "ð§ðūââïļ",
		plaincode: "01542"
	},
	{
		unicode: "ð§ðŋââïļ",
		plaincode: "01543"
	},
	{
		unicode: "ð§ââïļ",
		plaincode: "01544"
	},
	{
		unicode: "ð§ðŧââïļ",
		plaincode: "01545"
	},
	{
		unicode: "ð§ðžââïļ",
		plaincode: "01546"
	},
	{
		unicode: "ð§ð―ââïļ",
		plaincode: "01547"
	},
	{
		unicode: "ð§ðūââïļ",
		plaincode: "01548"
	},
	{
		unicode: "ð§ðŋââïļ",
		plaincode: "01549"
	},
	{
		unicode: "ð§âðĶŊ",
		plaincode: "01550"
	},
	{
		unicode: "ð§ðŧâðĶŊ",
		plaincode: "01551"
	},
	{
		unicode: "ð§ðžâðĶŊ",
		plaincode: "01552"
	},
	{
		unicode: "ð§ð―âðĶŊ",
		plaincode: "01553"
	},
	{
		unicode: "ð§ðūâðĶŊ",
		plaincode: "01554"
	},
	{
		unicode: "ð§ðŋâðĶŊ",
		plaincode: "01555"
	},
	{
		unicode: "ðĻâðĶŊ",
		plaincode: "01556"
	},
	{
		unicode: "ðĻðŧâðĶŊ",
		plaincode: "01557"
	},
	{
		unicode: "ðĻðžâðĶŊ",
		plaincode: "01558"
	},
	{
		unicode: "ðĻð―âðĶŊ",
		plaincode: "01559"
	},
	{
		unicode: "ðĻðūâðĶŊ",
		plaincode: "01560"
	},
	{
		unicode: "ðĻðŋâðĶŊ",
		plaincode: "01561"
	},
	{
		unicode: "ðĐâðĶŊ",
		plaincode: "01562"
	},
	{
		unicode: "ðĐðŧâðĶŊ",
		plaincode: "01563"
	},
	{
		unicode: "ðĐðžâðĶŊ",
		plaincode: "01564"
	},
	{
		unicode: "ðĐð―âðĶŊ",
		plaincode: "01565"
	},
	{
		unicode: "ðĐðūâðĶŊ",
		plaincode: "01566"
	},
	{
		unicode: "ðĐðŋâðĶŊ",
		plaincode: "01567"
	},
	{
		unicode: "ð§âðĶž",
		plaincode: "01568"
	},
	{
		unicode: "ð§ðŧâðĶž",
		plaincode: "01569"
	},
	{
		unicode: "ð§ðžâðĶž",
		plaincode: "01570"
	},
	{
		unicode: "ð§ð―âðĶž",
		plaincode: "01571"
	},
	{
		unicode: "ð§ðūâðĶž",
		plaincode: "01572"
	},
	{
		unicode: "ð§ðŋâðĶž",
		plaincode: "01573"
	},
	{
		unicode: "ðĻâðĶž",
		plaincode: "01574"
	},
	{
		unicode: "ðĻðŧâðĶž",
		plaincode: "01575"
	},
	{
		unicode: "ðĻðžâðĶž",
		plaincode: "01576"
	},
	{
		unicode: "ðĻð―âðĶž",
		plaincode: "01577"
	},
	{
		unicode: "ðĻðūâðĶž",
		plaincode: "01578"
	},
	{
		unicode: "ðĻðŋâðĶž",
		plaincode: "01579"
	},
	{
		unicode: "ðĐâðĶž",
		plaincode: "01580"
	},
	{
		unicode: "ðĐðŧâðĶž",
		plaincode: "01581"
	},
	{
		unicode: "ðĐðžâðĶž",
		plaincode: "01582"
	},
	{
		unicode: "ðĐð―âðĶž",
		plaincode: "01583"
	},
	{
		unicode: "ðĐðūâðĶž",
		plaincode: "01584"
	},
	{
		unicode: "ðĐðŋâðĶž",
		plaincode: "01585"
	},
	{
		unicode: "ð§âðĶ―",
		plaincode: "01586"
	},
	{
		unicode: "ð§ðŧâðĶ―",
		plaincode: "01587"
	},
	{
		unicode: "ð§ðžâðĶ―",
		plaincode: "01588"
	},
	{
		unicode: "ð§ð―âðĶ―",
		plaincode: "01589"
	},
	{
		unicode: "ð§ðūâðĶ―",
		plaincode: "01590"
	},
	{
		unicode: "ð§ðŋâðĶ―",
		plaincode: "01591"
	},
	{
		unicode: "ðĻâðĶ―",
		plaincode: "01592"
	},
	{
		unicode: "ðĻðŧâðĶ―",
		plaincode: "01593"
	},
	{
		unicode: "ðĻðžâðĶ―",
		plaincode: "01594"
	},
	{
		unicode: "ðĻð―âðĶ―",
		plaincode: "01595"
	},
	{
		unicode: "ðĻðūâðĶ―",
		plaincode: "01596"
	},
	{
		unicode: "ðĻðŋâðĶ―",
		plaincode: "01597"
	},
	{
		unicode: "ðĐâðĶ―",
		plaincode: "01598"
	},
	{
		unicode: "ðĐðŧâðĶ―",
		plaincode: "01599"
	},
	{
		unicode: "ðĐðžâðĶ―",
		plaincode: "01600"
	},
	{
		unicode: "ðĐð―âðĶ―",
		plaincode: "01601"
	},
	{
		unicode: "ðĐðūâðĶ―",
		plaincode: "01602"
	},
	{
		unicode: "ðĐðŋâðĶ―",
		plaincode: "01603"
	},
	{
		unicode: "ð",
		plaincode: "01604"
	},
	{
		unicode: "ððŧ",
		plaincode: "01605"
	},
	{
		unicode: "ððž",
		plaincode: "01606"
	},
	{
		unicode: "ðð―",
		plaincode: "01607"
	},
	{
		unicode: "ððū",
		plaincode: "01608"
	},
	{
		unicode: "ððŋ",
		plaincode: "01609"
	},
	{
		unicode: "ðââïļ",
		plaincode: "01610"
	},
	{
		unicode: "ððŧââïļ",
		plaincode: "01611"
	},
	{
		unicode: "ððžââïļ",
		plaincode: "01612"
	},
	{
		unicode: "ðð―ââïļ",
		plaincode: "01613"
	},
	{
		unicode: "ððūââïļ",
		plaincode: "01614"
	},
	{
		unicode: "ððŋââïļ",
		plaincode: "01615"
	},
	{
		unicode: "ðââïļ",
		plaincode: "01616"
	},
	{
		unicode: "ððŧââïļ",
		plaincode: "01617"
	},
	{
		unicode: "ððžââïļ",
		plaincode: "01618"
	},
	{
		unicode: "ðð―ââïļ",
		plaincode: "01619"
	},
	{
		unicode: "ððūââïļ",
		plaincode: "01620"
	},
	{
		unicode: "ððŋââïļ",
		plaincode: "01621"
	},
	{
		unicode: "ð",
		plaincode: "01622"
	},
	{
		unicode: "ððŧ",
		plaincode: "01623"
	},
	{
		unicode: "ððž",
		plaincode: "01624"
	},
	{
		unicode: "ðð―",
		plaincode: "01625"
	},
	{
		unicode: "ððū",
		plaincode: "01626"
	},
	{
		unicode: "ððŋ",
		plaincode: "01627"
	},
	{
		unicode: "ðš",
		plaincode: "01628"
	},
	{
		unicode: "ðšðŧ",
		plaincode: "01629"
	},
	{
		unicode: "ðšðž",
		plaincode: "01630"
	},
	{
		unicode: "ðšð―",
		plaincode: "01631"
	},
	{
		unicode: "ðšðū",
		plaincode: "01632"
	},
	{
		unicode: "ðšðŋ",
		plaincode: "01633"
	},
	{
		unicode: "ðīðŧ",
		plaincode: "01634"
	},
	{
		unicode: "ðīðž",
		plaincode: "01635"
	},
	{
		unicode: "ðīð―",
		plaincode: "01636"
	},
	{
		unicode: "ðīðū",
		plaincode: "01637"
	},
	{
		unicode: "ðīðŋ",
		plaincode: "01638"
	},
	{
		unicode: "ðŊ",
		plaincode: "01639"
	},
	{
		unicode: "ðŊââïļ",
		plaincode: "01640"
	},
	{
		unicode: "ðŊââïļ",
		plaincode: "01641"
	},
	{
		unicode: "ð§",
		plaincode: "01642"
	},
	{
		unicode: "ð§ðŧ",
		plaincode: "01643"
	},
	{
		unicode: "ð§ðž",
		plaincode: "01644"
	},
	{
		unicode: "ð§ð―",
		plaincode: "01645"
	},
	{
		unicode: "ð§ðū",
		plaincode: "01646"
	},
	{
		unicode: "ð§ðŋ",
		plaincode: "01647"
	},
	{
		unicode: "ð§ââïļ",
		plaincode: "01648"
	},
	{
		unicode: "ð§ðŧââïļ",
		plaincode: "01649"
	},
	{
		unicode: "ð§ðžââïļ",
		plaincode: "01650"
	},
	{
		unicode: "ð§ð―ââïļ",
		plaincode: "01651"
	},
	{
		unicode: "ð§ðūââïļ",
		plaincode: "01652"
	},
	{
		unicode: "ð§ðŋââïļ",
		plaincode: "01653"
	},
	{
		unicode: "ð§ââïļ",
		plaincode: "01654"
	},
	{
		unicode: "ð§ðŧââïļ",
		plaincode: "01655"
	},
	{
		unicode: "ð§ðžââïļ",
		plaincode: "01656"
	},
	{
		unicode: "ð§ð―ââïļ",
		plaincode: "01657"
	},
	{
		unicode: "ð§ðūââïļ",
		plaincode: "01658"
	},
	{
		unicode: "ð§ðŋââïļ",
		plaincode: "01659"
	},
	{
		unicode: "ð§",
		plaincode: "01660"
	},
	{
		unicode: "ð§ðŧ",
		plaincode: "01661"
	},
	{
		unicode: "ð§ðž",
		plaincode: "01662"
	},
	{
		unicode: "ð§ð―",
		plaincode: "01663"
	},
	{
		unicode: "ð§ðū",
		plaincode: "01664"
	},
	{
		unicode: "ð§ðŋ",
		plaincode: "01665"
	},
	{
		unicode: "ð§ââïļ",
		plaincode: "01666"
	},
	{
		unicode: "ð§ðŧââïļ",
		plaincode: "01667"
	},
	{
		unicode: "ð§ðžââïļ",
		plaincode: "01668"
	},
	{
		unicode: "ð§ð―ââïļ",
		plaincode: "01669"
	},
	{
		unicode: "ð§ðūââïļ",
		plaincode: "01670"
	},
	{
		unicode: "ð§ðŋââïļ",
		plaincode: "01671"
	},
	{
		unicode: "ð§ââïļ",
		plaincode: "01672"
	},
	{
		unicode: "ð§ðŧââïļ",
		plaincode: "01673"
	},
	{
		unicode: "ð§ðžââïļ",
		plaincode: "01674"
	},
	{
		unicode: "ð§ð―ââïļ",
		plaincode: "01675"
	},
	{
		unicode: "ð§ðūââïļ",
		plaincode: "01676"
	},
	{
		unicode: "ð§ðŋââïļ",
		plaincode: "01677"
	},
	{
		unicode: "ðĪš",
		plaincode: "01678"
	},
	{
		unicode: "ð",
		plaincode: "01679"
	},
	{
		unicode: "ððŧ",
		plaincode: "01680"
	},
	{
		unicode: "ððž",
		plaincode: "01681"
	},
	{
		unicode: "ðð―",
		plaincode: "01682"
	},
	{
		unicode: "ððū",
		plaincode: "01683"
	},
	{
		unicode: "ððŋ",
		plaincode: "01684"
	},
	{
		unicode: "ð",
		plaincode: "01685"
	},
	{
		unicode: "ððŧ",
		plaincode: "01686"
	},
	{
		unicode: "ððž",
		plaincode: "01687"
	},
	{
		unicode: "ðð―",
		plaincode: "01688"
	},
	{
		unicode: "ððū",
		plaincode: "01689"
	},
	{
		unicode: "ððŋ",
		plaincode: "01690"
	},
	{
		unicode: "ððŧ",
		plaincode: "01691"
	},
	{
		unicode: "ððž",
		plaincode: "01692"
	},
	{
		unicode: "ðð―",
		plaincode: "01693"
	},
	{
		unicode: "ððū",
		plaincode: "01694"
	},
	{
		unicode: "ððŋ",
		plaincode: "01695"
	},
	{
		unicode: "ðïļââïļ",
		plaincode: "01696"
	},
	{
		unicode: "ððŧââïļ",
		plaincode: "01697"
	},
	{
		unicode: "ððžââïļ",
		plaincode: "01698"
	},
	{
		unicode: "ðð―ââïļ",
		plaincode: "01699"
	},
	{
		unicode: "ððūââïļ",
		plaincode: "01700"
	},
	{
		unicode: "ððŋââïļ",
		plaincode: "01701"
	},
	{
		unicode: "ðïļââïļ",
		plaincode: "01702"
	},
	{
		unicode: "ððŧââïļ",
		plaincode: "01703"
	},
	{
		unicode: "ððžââïļ",
		plaincode: "01704"
	},
	{
		unicode: "ðð―ââïļ",
		plaincode: "01705"
	},
	{
		unicode: "ððūââïļ",
		plaincode: "01706"
	},
	{
		unicode: "ððŋââïļ",
		plaincode: "01707"
	},
	{
		unicode: "ð",
		plaincode: "01708"
	},
	{
		unicode: "ððŧ",
		plaincode: "01709"
	},
	{
		unicode: "ððž",
		plaincode: "01710"
	},
	{
		unicode: "ðð―",
		plaincode: "01711"
	},
	{
		unicode: "ððū",
		plaincode: "01712"
	},
	{
		unicode: "ððŋ",
		plaincode: "01713"
	},
	{
		unicode: "ðââïļ",
		plaincode: "01714"
	},
	{
		unicode: "ððŧââïļ",
		plaincode: "01715"
	},
	{
		unicode: "ððžââïļ",
		plaincode: "01716"
	},
	{
		unicode: "ðð―ââïļ",
		plaincode: "01717"
	},
	{
		unicode: "ððūââïļ",
		plaincode: "01718"
	},
	{
		unicode: "ððŋââïļ",
		plaincode: "01719"
	},
	{
		unicode: "ðââïļ",
		plaincode: "01720"
	},
	{
		unicode: "ððŧââïļ",
		plaincode: "01721"
	},
	{
		unicode: "ððžââïļ",
		plaincode: "01722"
	},
	{
		unicode: "ðð―ââïļ",
		plaincode: "01723"
	},
	{
		unicode: "ððūââïļ",
		plaincode: "01724"
	},
	{
		unicode: "ððŋââïļ",
		plaincode: "01725"
	},
	{
		unicode: "ðĢ",
		plaincode: "01726"
	},
	{
		unicode: "ðĢðŧ",
		plaincode: "01727"
	},
	{
		unicode: "ðĢðž",
		plaincode: "01728"
	},
	{
		unicode: "ðĢð―",
		plaincode: "01729"
	},
	{
		unicode: "ðĢðū",
		plaincode: "01730"
	},
	{
		unicode: "ðĢðŋ",
		plaincode: "01731"
	},
	{
		unicode: "ðĢââïļ",
		plaincode: "01732"
	},
	{
		unicode: "ðĢðŧââïļ",
		plaincode: "01733"
	},
	{
		unicode: "ðĢðžââïļ",
		plaincode: "01734"
	},
	{
		unicode: "ðĢð―ââïļ",
		plaincode: "01735"
	},
	{
		unicode: "ðĢðūââïļ",
		plaincode: "01736"
	},
	{
		unicode: "ðĢðŋââïļ",
		plaincode: "01737"
	},
	{
		unicode: "ðĢââïļ",
		plaincode: "01738"
	},
	{
		unicode: "ðĢðŧââïļ",
		plaincode: "01739"
	},
	{
		unicode: "ðĢðžââïļ",
		plaincode: "01740"
	},
	{
		unicode: "ðĢð―ââïļ",
		plaincode: "01741"
	},
	{
		unicode: "ðĢðūââïļ",
		plaincode: "01742"
	},
	{
		unicode: "ðĢðŋââïļ",
		plaincode: "01743"
	},
	{
		unicode: "ð",
		plaincode: "01744"
	},
	{
		unicode: "ððŧ",
		plaincode: "01745"
	},
	{
		unicode: "ððž",
		plaincode: "01746"
	},
	{
		unicode: "ðð―",
		plaincode: "01747"
	},
	{
		unicode: "ððū",
		plaincode: "01748"
	},
	{
		unicode: "ððŋ",
		plaincode: "01749"
	},
	{
		unicode: "ðââïļ",
		plaincode: "01750"
	},
	{
		unicode: "ððŧââïļ",
		plaincode: "01751"
	},
	{
		unicode: "ððžââïļ",
		plaincode: "01752"
	},
	{
		unicode: "ðð―ââïļ",
		plaincode: "01753"
	},
	{
		unicode: "ððūââïļ",
		plaincode: "01754"
	},
	{
		unicode: "ððŋââïļ",
		plaincode: "01755"
	},
	{
		unicode: "ðââïļ",
		plaincode: "01756"
	},
	{
		unicode: "ððŧââïļ",
		plaincode: "01757"
	},
	{
		unicode: "ððžââïļ",
		plaincode: "01758"
	},
	{
		unicode: "ðð―ââïļ",
		plaincode: "01759"
	},
	{
		unicode: "ððūââïļ",
		plaincode: "01760"
	},
	{
		unicode: "ððŋââïļ",
		plaincode: "01761"
	},
	{
		unicode: "âđðŧ",
		plaincode: "01762"
	},
	{
		unicode: "âđðž",
		plaincode: "01763"
	},
	{
		unicode: "âđð―",
		plaincode: "01764"
	},
	{
		unicode: "âđðū",
		plaincode: "01765"
	},
	{
		unicode: "âđðŋ",
		plaincode: "01766"
	},
	{
		unicode: "âđïļââïļ",
		plaincode: "01767"
	},
	{
		unicode: "âđðŧââïļ",
		plaincode: "01768"
	},
	{
		unicode: "âđðžââïļ",
		plaincode: "01769"
	},
	{
		unicode: "âđð―ââïļ",
		plaincode: "01770"
	},
	{
		unicode: "âđðūââïļ",
		plaincode: "01771"
	},
	{
		unicode: "âđðŋââïļ",
		plaincode: "01772"
	},
	{
		unicode: "âđïļââïļ",
		plaincode: "01773"
	},
	{
		unicode: "âđðŧââïļ",
		plaincode: "01774"
	},
	{
		unicode: "âđðžââïļ",
		plaincode: "01775"
	},
	{
		unicode: "âđð―ââïļ",
		plaincode: "01776"
	},
	{
		unicode: "âđðūââïļ",
		plaincode: "01777"
	},
	{
		unicode: "âđðŋââïļ",
		plaincode: "01778"
	},
	{
		unicode: "ððŧ",
		plaincode: "01779"
	},
	{
		unicode: "ððž",
		plaincode: "01780"
	},
	{
		unicode: "ðð―",
		plaincode: "01781"
	},
	{
		unicode: "ððū",
		plaincode: "01782"
	},
	{
		unicode: "ððŋ",
		plaincode: "01783"
	},
	{
		unicode: "ðïļââïļ",
		plaincode: "01784"
	},
	{
		unicode: "ððŧââïļ",
		plaincode: "01785"
	},
	{
		unicode: "ððžââïļ",
		plaincode: "01786"
	},
	{
		unicode: "ðð―ââïļ",
		plaincode: "01787"
	},
	{
		unicode: "ððūââïļ",
		plaincode: "01788"
	},
	{
		unicode: "ððŋââïļ",
		plaincode: "01789"
	},
	{
		unicode: "ðïļââïļ",
		plaincode: "01790"
	},
	{
		unicode: "ððŧââïļ",
		plaincode: "01791"
	},
	{
		unicode: "ððžââïļ",
		plaincode: "01792"
	},
	{
		unicode: "ðð―ââïļ",
		plaincode: "01793"
	},
	{
		unicode: "ððūââïļ",
		plaincode: "01794"
	},
	{
		unicode: "ððŋââïļ",
		plaincode: "01795"
	},
	{
		unicode: "ðī",
		plaincode: "01796"
	},
	{
		unicode: "ðīðŧ",
		plaincode: "01797"
	},
	{
		unicode: "ðīðž",
		plaincode: "01798"
	},
	{
		unicode: "ðīð―",
		plaincode: "01799"
	},
	{
		unicode: "ðīðū",
		plaincode: "01800"
	},
	{
		unicode: "ðīðŋ",
		plaincode: "01801"
	},
	{
		unicode: "ðīââïļ",
		plaincode: "01802"
	},
	{
		unicode: "ðīðŧââïļ",
		plaincode: "01803"
	},
	{
		unicode: "ðīðžââïļ",
		plaincode: "01804"
	},
	{
		unicode: "ðīð―ââïļ",
		plaincode: "01805"
	},
	{
		unicode: "ðīðūââïļ",
		plaincode: "01806"
	},
	{
		unicode: "ðīðŋââïļ",
		plaincode: "01807"
	},
	{
		unicode: "ðīââïļ",
		plaincode: "01808"
	},
	{
		unicode: "ðīðŧââïļ",
		plaincode: "01809"
	},
	{
		unicode: "ðīðžââïļ",
		plaincode: "01810"
	},
	{
		unicode: "ðīð―ââïļ",
		plaincode: "01811"
	},
	{
		unicode: "ðīðūââïļ",
		plaincode: "01812"
	},
	{
		unicode: "ðīðŋââïļ",
		plaincode: "01813"
	},
	{
		unicode: "ðĩ",
		plaincode: "01814"
	},
	{
		unicode: "ðĩðŧ",
		plaincode: "01815"
	},
	{
		unicode: "ðĩðž",
		plaincode: "01816"
	},
	{
		unicode: "ðĩð―",
		plaincode: "01817"
	},
	{
		unicode: "ðĩðū",
		plaincode: "01818"
	},
	{
		unicode: "ðĩðŋ",
		plaincode: "01819"
	},
	{
		unicode: "ðĩââïļ",
		plaincode: "01820"
	},
	{
		unicode: "ðĩðŧââïļ",
		plaincode: "01821"
	},
	{
		unicode: "ðĩðžââïļ",
		plaincode: "01822"
	},
	{
		unicode: "ðĩð―ââïļ",
		plaincode: "01823"
	},
	{
		unicode: "ðĩðūââïļ",
		plaincode: "01824"
	},
	{
		unicode: "ðĩðŋââïļ",
		plaincode: "01825"
	},
	{
		unicode: "ðĩââïļ",
		plaincode: "01826"
	},
	{
		unicode: "ðĩðŧââïļ",
		plaincode: "01827"
	},
	{
		unicode: "ðĩðžââïļ",
		plaincode: "01828"
	},
	{
		unicode: "ðĩð―ââïļ",
		plaincode: "01829"
	},
	{
		unicode: "ðĩðūââïļ",
		plaincode: "01830"
	},
	{
		unicode: "ðĩðŋââïļ",
		plaincode: "01831"
	},
	{
		unicode: "ðĪļ",
		plaincode: "01832"
	},
	{
		unicode: "ðĪļðŧ",
		plaincode: "01833"
	},
	{
		unicode: "ðĪļðž",
		plaincode: "01834"
	},
	{
		unicode: "ðĪļð―",
		plaincode: "01835"
	},
	{
		unicode: "ðĪļðū",
		plaincode: "01836"
	},
	{
		unicode: "ðĪļðŋ",
		plaincode: "01837"
	},
	{
		unicode: "ðĪļââïļ",
		plaincode: "01838"
	},
	{
		unicode: "ðĪļðŧââïļ",
		plaincode: "01839"
	},
	{
		unicode: "ðĪļðžââïļ",
		plaincode: "01840"
	},
	{
		unicode: "ðĪļð―ââïļ",
		plaincode: "01841"
	},
	{
		unicode: "ðĪļðūââïļ",
		plaincode: "01842"
	},
	{
		unicode: "ðĪļðŋââïļ",
		plaincode: "01843"
	},
	{
		unicode: "ðĪļââïļ",
		plaincode: "01844"
	},
	{
		unicode: "ðĪļðŧââïļ",
		plaincode: "01845"
	},
	{
		unicode: "ðĪļðžââïļ",
		plaincode: "01846"
	},
	{
		unicode: "ðĪļð―ââïļ",
		plaincode: "01847"
	},
	{
		unicode: "ðĪļðūââïļ",
		plaincode: "01848"
	},
	{
		unicode: "ðĪļðŋââïļ",
		plaincode: "01849"
	},
	{
		unicode: "ðĪž",
		plaincode: "01850"
	},
	{
		unicode: "ðĪžââïļ",
		plaincode: "01851"
	},
	{
		unicode: "ðĪžââïļ",
		plaincode: "01852"
	},
	{
		unicode: "ðĪ―",
		plaincode: "01853"
	},
	{
		unicode: "ðĪ―ðŧ",
		plaincode: "01854"
	},
	{
		unicode: "ðĪ―ðž",
		plaincode: "01855"
	},
	{
		unicode: "ðĪ―ð―",
		plaincode: "01856"
	},
	{
		unicode: "ðĪ―ðū",
		plaincode: "01857"
	},
	{
		unicode: "ðĪ―ðŋ",
		plaincode: "01858"
	},
	{
		unicode: "ðĪ―ââïļ",
		plaincode: "01859"
	},
	{
		unicode: "ðĪ―ðŧââïļ",
		plaincode: "01860"
	},
	{
		unicode: "ðĪ―ðžââïļ",
		plaincode: "01861"
	},
	{
		unicode: "ðĪ―ð―ââïļ",
		plaincode: "01862"
	},
	{
		unicode: "ðĪ―ðūââïļ",
		plaincode: "01863"
	},
	{
		unicode: "ðĪ―ðŋââïļ",
		plaincode: "01864"
	},
	{
		unicode: "ðĪ―ââïļ",
		plaincode: "01865"
	},
	{
		unicode: "ðĪ―ðŧââïļ",
		plaincode: "01866"
	},
	{
		unicode: "ðĪ―ðžââïļ",
		plaincode: "01867"
	},
	{
		unicode: "ðĪ―ð―ââïļ",
		plaincode: "01868"
	},
	{
		unicode: "ðĪ―ðūââïļ",
		plaincode: "01869"
	},
	{
		unicode: "ðĪ―ðŋââïļ",
		plaincode: "01870"
	},
	{
		unicode: "ðĪū",
		plaincode: "01871"
	},
	{
		unicode: "ðĪūðŧ",
		plaincode: "01872"
	},
	{
		unicode: "ðĪūðž",
		plaincode: "01873"
	},
	{
		unicode: "ðĪūð―",
		plaincode: "01874"
	},
	{
		unicode: "ðĪūðū",
		plaincode: "01875"
	},
	{
		unicode: "ðĪūðŋ",
		plaincode: "01876"
	},
	{
		unicode: "ðĪūââïļ",
		plaincode: "01877"
	},
	{
		unicode: "ðĪūðŧââïļ",
		plaincode: "01878"
	},
	{
		unicode: "ðĪūðžââïļ",
		plaincode: "01879"
	},
	{
		unicode: "ðĪūð―ââïļ",
		plaincode: "01880"
	},
	{
		unicode: "ðĪūðūââïļ",
		plaincode: "01881"
	},
	{
		unicode: "ðĪūðŋââïļ",
		plaincode: "01882"
	},
	{
		unicode: "ðĪūââïļ",
		plaincode: "01883"
	},
	{
		unicode: "ðĪūðŧââïļ",
		plaincode: "01884"
	},
	{
		unicode: "ðĪūðžââïļ",
		plaincode: "01885"
	},
	{
		unicode: "ðĪūð―ââïļ",
		plaincode: "01886"
	},
	{
		unicode: "ðĪūðūââïļ",
		plaincode: "01887"
	},
	{
		unicode: "ðĪūðŋââïļ",
		plaincode: "01888"
	},
	{
		unicode: "ðĪđ",
		plaincode: "01889"
	},
	{
		unicode: "ðĪđðŧ",
		plaincode: "01890"
	},
	{
		unicode: "ðĪđðž",
		plaincode: "01891"
	},
	{
		unicode: "ðĪđð―",
		plaincode: "01892"
	},
	{
		unicode: "ðĪđðū",
		plaincode: "01893"
	},
	{
		unicode: "ðĪđðŋ",
		plaincode: "01894"
	},
	{
		unicode: "ðĪđââïļ",
		plaincode: "01895"
	},
	{
		unicode: "ðĪđðŧââïļ",
		plaincode: "01896"
	},
	{
		unicode: "ðĪđðžââïļ",
		plaincode: "01897"
	},
	{
		unicode: "ðĪđð―ââïļ",
		plaincode: "01898"
	},
	{
		unicode: "ðĪđðūââïļ",
		plaincode: "01899"
	},
	{
		unicode: "ðĪđðŋââïļ",
		plaincode: "01900"
	},
	{
		unicode: "ðĪđââïļ",
		plaincode: "01901"
	},
	{
		unicode: "ðĪđðŧââïļ",
		plaincode: "01902"
	},
	{
		unicode: "ðĪđðžââïļ",
		plaincode: "01903"
	},
	{
		unicode: "ðĪđð―ââïļ",
		plaincode: "01904"
	},
	{
		unicode: "ðĪđðūââïļ",
		plaincode: "01905"
	},
	{
		unicode: "ðĪđðŋââïļ",
		plaincode: "01906"
	},
	{
		unicode: "ð§",
		plaincode: "01907"
	},
	{
		unicode: "ð§ðŧ",
		plaincode: "01908"
	},
	{
		unicode: "ð§ðž",
		plaincode: "01909"
	},
	{
		unicode: "ð§ð―",
		plaincode: "01910"
	},
	{
		unicode: "ð§ðū",
		plaincode: "01911"
	},
	{
		unicode: "ð§ðŋ",
		plaincode: "01912"
	},
	{
		unicode: "ð§ââïļ",
		plaincode: "01913"
	},
	{
		unicode: "ð§ðŧââïļ",
		plaincode: "01914"
	},
	{
		unicode: "ð§ðžââïļ",
		plaincode: "01915"
	},
	{
		unicode: "ð§ð―ââïļ",
		plaincode: "01916"
	},
	{
		unicode: "ð§ðūââïļ",
		plaincode: "01917"
	},
	{
		unicode: "ð§ðŋââïļ",
		plaincode: "01918"
	},
	{
		unicode: "ð§ââïļ",
		plaincode: "01919"
	},
	{
		unicode: "ð§ðŧââïļ",
		plaincode: "01920"
	},
	{
		unicode: "ð§ðžââïļ",
		plaincode: "01921"
	},
	{
		unicode: "ð§ð―ââïļ",
		plaincode: "01922"
	},
	{
		unicode: "ð§ðūââïļ",
		plaincode: "01923"
	},
	{
		unicode: "ð§ðŋââïļ",
		plaincode: "01924"
	},
	{
		unicode: "ð",
		plaincode: "01925"
	},
	{
		unicode: "ððŧ",
		plaincode: "01926"
	},
	{
		unicode: "ððž",
		plaincode: "01927"
	},
	{
		unicode: "ðð―",
		plaincode: "01928"
	},
	{
		unicode: "ððū",
		plaincode: "01929"
	},
	{
		unicode: "ððŋ",
		plaincode: "01930"
	},
	{
		unicode: "ð",
		plaincode: "01931"
	},
	{
		unicode: "ððŧ",
		plaincode: "01932"
	},
	{
		unicode: "ððž",
		plaincode: "01933"
	},
	{
		unicode: "ðð―",
		plaincode: "01934"
	},
	{
		unicode: "ððū",
		plaincode: "01935"
	},
	{
		unicode: "ððŋ",
		plaincode: "01936"
	},
	{
		unicode: "ð§âðĪâð§",
		plaincode: "01937"
	},
	{
		unicode: "ð§ðŧâðĪâð§ðŧ",
		plaincode: "01938"
	},
	{
		unicode: "ð§ðŧâðĪâð§ðž",
		plaincode: "01939"
	},
	{
		unicode: "ð§ðŧâðĪâð§ð―",
		plaincode: "01940"
	},
	{
		unicode: "ð§ðŧâðĪâð§ðū",
		plaincode: "01941"
	},
	{
		unicode: "ð§ðŧâðĪâð§ðŋ",
		plaincode: "01942"
	},
	{
		unicode: "ð§ðžâðĪâð§ðŧ",
		plaincode: "01943"
	},
	{
		unicode: "ð§ðžâðĪâð§ðž",
		plaincode: "01944"
	},
	{
		unicode: "ð§ðžâðĪâð§ð―",
		plaincode: "01945"
	},
	{
		unicode: "ð§ðžâðĪâð§ðū",
		plaincode: "01946"
	},
	{
		unicode: "ð§ðžâðĪâð§ðŋ",
		plaincode: "01947"
	},
	{
		unicode: "ð§ð―âðĪâð§ðŧ",
		plaincode: "01948"
	},
	{
		unicode: "ð§ð―âðĪâð§ðž",
		plaincode: "01949"
	},
	{
		unicode: "ð§ð―âðĪâð§ð―",
		plaincode: "01950"
	},
	{
		unicode: "ð§ð―âðĪâð§ðū",
		plaincode: "01951"
	},
	{
		unicode: "ð§ð―âðĪâð§ðŋ",
		plaincode: "01952"
	},
	{
		unicode: "ð§ðūâðĪâð§ðŧ",
		plaincode: "01953"
	},
	{
		unicode: "ð§ðūâðĪâð§ðž",
		plaincode: "01954"
	},
	{
		unicode: "ð§ðūâðĪâð§ð―",
		plaincode: "01955"
	},
	{
		unicode: "ð§ðūâðĪâð§ðū",
		plaincode: "01956"
	},
	{
		unicode: "ð§ðūâðĪâð§ðŋ",
		plaincode: "01957"
	},
	{
		unicode: "ð§ðŋâðĪâð§ðŧ",
		plaincode: "01958"
	},
	{
		unicode: "ð§ðŋâðĪâð§ðž",
		plaincode: "01959"
	},
	{
		unicode: "ð§ðŋâðĪâð§ð―",
		plaincode: "01960"
	},
	{
		unicode: "ð§ðŋâðĪâð§ðū",
		plaincode: "01961"
	},
	{
		unicode: "ð§ðŋâðĪâð§ðŋ",
		plaincode: "01962"
	},
	{
		unicode: "ð­",
		plaincode: "01963"
	},
	{
		unicode: "ð­ðŧ",
		plaincode: "01964"
	},
	{
		unicode: "ðĐðŧâðĪâðĐðž",
		plaincode: "01965"
	},
	{
		unicode: "ðĐðŧâðĪâðĐð―",
		plaincode: "01966"
	},
	{
		unicode: "ðĐðŧâðĪâðĐðū",
		plaincode: "01967"
	},
	{
		unicode: "ðĐðŧâðĪâðĐðŋ",
		plaincode: "01968"
	},
	{
		unicode: "ðĐðžâðĪâðĐðŧ",
		plaincode: "01969"
	},
	{
		unicode: "ð­ðž",
		plaincode: "01970"
	},
	{
		unicode: "ðĐðžâðĪâðĐð―",
		plaincode: "01971"
	},
	{
		unicode: "ðĐðžâðĪâðĐðū",
		plaincode: "01972"
	},
	{
		unicode: "ðĐðžâðĪâðĐðŋ",
		plaincode: "01973"
	},
	{
		unicode: "ðĐð―âðĪâðĐðŧ",
		plaincode: "01974"
	},
	{
		unicode: "ðĐð―âðĪâðĐðž",
		plaincode: "01975"
	},
	{
		unicode: "ð­ð―",
		plaincode: "01976"
	},
	{
		unicode: "ðĐð―âðĪâðĐðū",
		plaincode: "01977"
	},
	{
		unicode: "ðĐð―âðĪâðĐðŋ",
		plaincode: "01978"
	},
	{
		unicode: "ðĐðūâðĪâðĐðŧ",
		plaincode: "01979"
	},
	{
		unicode: "ðĐðūâðĪâðĐðž",
		plaincode: "01980"
	},
	{
		unicode: "ðĐðūâðĪâðĐð―",
		plaincode: "01981"
	},
	{
		unicode: "ð­ðū",
		plaincode: "01982"
	},
	{
		unicode: "ðĐðūâðĪâðĐðŋ",
		plaincode: "01983"
	},
	{
		unicode: "ðĐðŋâðĪâðĐðŧ",
		plaincode: "01984"
	},
	{
		unicode: "ðĐðŋâðĪâðĐðž",
		plaincode: "01985"
	},
	{
		unicode: "ðĐðŋâðĪâðĐð―",
		plaincode: "01986"
	},
	{
		unicode: "ðĐðŋâðĪâðĐðū",
		plaincode: "01987"
	},
	{
		unicode: "ð­ðŋ",
		plaincode: "01988"
	},
	{
		unicode: "ðŦ",
		plaincode: "01989"
	},
	{
		unicode: "ðŦðŧ",
		plaincode: "01990"
	},
	{
		unicode: "ðĐðŧâðĪâðĻðž",
		plaincode: "01991"
	},
	{
		unicode: "ðĐðŧâðĪâðĻð―",
		plaincode: "01992"
	},
	{
		unicode: "ðĐðŧâðĪâðĻðū",
		plaincode: "01993"
	},
	{
		unicode: "ðĐðŧâðĪâðĻðŋ",
		plaincode: "01994"
	},
	{
		unicode: "ðĐðžâðĪâðĻðŧ",
		plaincode: "01995"
	},
	{
		unicode: "ðŦðž",
		plaincode: "01996"
	},
	{
		unicode: "ðĐðžâðĪâðĻð―",
		plaincode: "01997"
	},
	{
		unicode: "ðĐðžâðĪâðĻðū",
		plaincode: "01998"
	},
	{
		unicode: "ðĐðžâðĪâðĻðŋ",
		plaincode: "01999"
	},
	{
		unicode: "ðĐð―âðĪâðĻðŧ",
		plaincode: "02000"
	},
	{
		unicode: "ðĐð―âðĪâðĻðž",
		plaincode: "02001"
	},
	{
		unicode: "ðŦð―",
		plaincode: "02002"
	},
	{
		unicode: "ðĐð―âðĪâðĻðū",
		plaincode: "02003"
	},
	{
		unicode: "ðĐð―âðĪâðĻðŋ",
		plaincode: "02004"
	},
	{
		unicode: "ðĐðūâðĪâðĻðŧ",
		plaincode: "02005"
	},
	{
		unicode: "ðĐðūâðĪâðĻðž",
		plaincode: "02006"
	},
	{
		unicode: "ðĐðūâðĪâðĻð―",
		plaincode: "02007"
	},
	{
		unicode: "ðŦðū",
		plaincode: "02008"
	},
	{
		unicode: "ðĐðūâðĪâðĻðŋ",
		plaincode: "02009"
	},
	{
		unicode: "ðĐðŋâðĪâðĻðŧ",
		plaincode: "02010"
	},
	{
		unicode: "ðĐðŋâðĪâðĻðž",
		plaincode: "02011"
	},
	{
		unicode: "ðĐðŋâðĪâðĻð―",
		plaincode: "02012"
	},
	{
		unicode: "ðĐðŋâðĪâðĻðū",
		plaincode: "02013"
	},
	{
		unicode: "ðŦðŋ",
		plaincode: "02014"
	},
	{
		unicode: "ðŽ",
		plaincode: "02015"
	},
	{
		unicode: "ðŽðŧ",
		plaincode: "02016"
	},
	{
		unicode: "ðĻðŧâðĪâðĻðž",
		plaincode: "02017"
	},
	{
		unicode: "ðĻðŧâðĪâðĻð―",
		plaincode: "02018"
	},
	{
		unicode: "ðĻðŧâðĪâðĻðū",
		plaincode: "02019"
	},
	{
		unicode: "ðĻðŧâðĪâðĻðŋ",
		plaincode: "02020"
	},
	{
		unicode: "ðĻðžâðĪâðĻðŧ",
		plaincode: "02021"
	},
	{
		unicode: "ðŽðž",
		plaincode: "02022"
	},
	{
		unicode: "ðĻðžâðĪâðĻð―",
		plaincode: "02023"
	},
	{
		unicode: "ðĻðžâðĪâðĻðū",
		plaincode: "02024"
	},
	{
		unicode: "ðĻðžâðĪâðĻðŋ",
		plaincode: "02025"
	},
	{
		unicode: "ðĻð―âðĪâðĻðŧ",
		plaincode: "02026"
	},
	{
		unicode: "ðĻð―âðĪâðĻðž",
		plaincode: "02027"
	},
	{
		unicode: "ðŽð―",
		plaincode: "02028"
	},
	{
		unicode: "ðĻð―âðĪâðĻðū",
		plaincode: "02029"
	},
	{
		unicode: "ðĻð―âðĪâðĻðŋ",
		plaincode: "02030"
	},
	{
		unicode: "ðĻðūâðĪâðĻðŧ",
		plaincode: "02031"
	},
	{
		unicode: "ðĻðūâðĪâðĻðž",
		plaincode: "02032"
	},
	{
		unicode: "ðĻðūâðĪâðĻð―",
		plaincode: "02033"
	},
	{
		unicode: "ðŽðū",
		plaincode: "02034"
	},
	{
		unicode: "ðĻðūâðĪâðĻðŋ",
		plaincode: "02035"
	},
	{
		unicode: "ðĻðŋâðĪâðĻðŧ",
		plaincode: "02036"
	},
	{
		unicode: "ðĻðŋâðĪâðĻðž",
		plaincode: "02037"
	},
	{
		unicode: "ðĻðŋâðĪâðĻð―",
		plaincode: "02038"
	},
	{
		unicode: "ðĻðŋâðĪâðĻðū",
		plaincode: "02039"
	},
	{
		unicode: "ðŽðŋ",
		plaincode: "02040"
	},
	{
		unicode: "ð",
		plaincode: "02041"
	},
	{
		unicode: "ððŧ",
		plaincode: "02042"
	},
	{
		unicode: "ððž",
		plaincode: "02043"
	},
	{
		unicode: "ðð―",
		plaincode: "02044"
	},
	{
		unicode: "ððū",
		plaincode: "02045"
	},
	{
		unicode: "ððŋ",
		plaincode: "02046"
	},
	{
		unicode: "ð§ðŧââĪïļâðâð§ðž",
		plaincode: "02047"
	},
	{
		unicode: "ð§ðŧââĪïļâðâð§ð―",
		plaincode: "02048"
	},
	{
		unicode: "ð§ðŧââĪïļâðâð§ðū",
		plaincode: "02049"
	},
	{
		unicode: "ð§ðŧââĪïļâðâð§ðŋ",
		plaincode: "02050"
	},
	{
		unicode: "ð§ðžââĪïļâðâð§ðŧ",
		plaincode: "02051"
	},
	{
		unicode: "ð§ðžââĪïļâðâð§ð―",
		plaincode: "02052"
	},
	{
		unicode: "ð§ðžââĪïļâðâð§ðū",
		plaincode: "02053"
	},
	{
		unicode: "ð§ðžââĪïļâðâð§ðŋ",
		plaincode: "02054"
	},
	{
		unicode: "ð§ð―ââĪïļâðâð§ðŧ",
		plaincode: "02055"
	},
	{
		unicode: "ð§ð―ââĪïļâðâð§ðž",
		plaincode: "02056"
	},
	{
		unicode: "ð§ð―ââĪïļâðâð§ðū",
		plaincode: "02057"
	},
	{
		unicode: "ð§ð―ââĪïļâðâð§ðŋ",
		plaincode: "02058"
	},
	{
		unicode: "ð§ðūââĪïļâðâð§ðŧ",
		plaincode: "02059"
	},
	{
		unicode: "ð§ðūââĪïļâðâð§ðž",
		plaincode: "02060"
	},
	{
		unicode: "ð§ðūââĪïļâðâð§ð―",
		plaincode: "02061"
	},
	{
		unicode: "ð§ðūââĪïļâðâð§ðŋ",
		plaincode: "02062"
	},
	{
		unicode: "ð§ðŋââĪïļâðâð§ðŧ",
		plaincode: "02063"
	},
	{
		unicode: "ð§ðŋââĪïļâðâð§ðž",
		plaincode: "02064"
	},
	{
		unicode: "ð§ðŋââĪïļâðâð§ð―",
		plaincode: "02065"
	},
	{
		unicode: "ð§ðŋââĪïļâðâð§ðū",
		plaincode: "02066"
	},
	{
		unicode: "ðĐââĪïļâðâðĻ",
		plaincode: "02067"
	},
	{
		unicode: "ðĐðŧââĪïļâðâðĻðŧ",
		plaincode: "02068"
	},
	{
		unicode: "ðĐðŧââĪïļâðâðĻðž",
		plaincode: "02069"
	},
	{
		unicode: "ðĐðŧââĪïļâðâðĻð―",
		plaincode: "02070"
	},
	{
		unicode: "ðĐðŧââĪïļâðâðĻðū",
		plaincode: "02071"
	},
	{
		unicode: "ðĐðŧââĪïļâðâðĻðŋ",
		plaincode: "02072"
	},
	{
		unicode: "ðĐðžââĪïļâðâðĻðŧ",
		plaincode: "02073"
	},
	{
		unicode: "ðĐðžââĪïļâðâðĻðž",
		plaincode: "02074"
	},
	{
		unicode: "ðĐðžââĪïļâðâðĻð―",
		plaincode: "02075"
	},
	{
		unicode: "ðĐðžââĪïļâðâðĻðū",
		plaincode: "02076"
	},
	{
		unicode: "ðĐðžââĪïļâðâðĻðŋ",
		plaincode: "02077"
	},
	{
		unicode: "ðĐð―ââĪïļâðâðĻðŧ",
		plaincode: "02078"
	},
	{
		unicode: "ðĐð―ââĪïļâðâðĻðž",
		plaincode: "02079"
	},
	{
		unicode: "ðĐð―ââĪïļâðâðĻð―",
		plaincode: "02080"
	},
	{
		unicode: "ðĐð―ââĪïļâðâðĻðū",
		plaincode: "02081"
	},
	{
		unicode: "ðĐð―ââĪïļâðâðĻðŋ",
		plaincode: "02082"
	},
	{
		unicode: "ðĐðūââĪïļâðâðĻðŧ",
		plaincode: "02083"
	},
	{
		unicode: "ðĐðūââĪïļâðâðĻðž",
		plaincode: "02084"
	},
	{
		unicode: "ðĐðūââĪïļâðâðĻð―",
		plaincode: "02085"
	},
	{
		unicode: "ðĐðūââĪïļâðâðĻðū",
		plaincode: "02086"
	},
	{
		unicode: "ðĐðūââĪïļâðâðĻðŋ",
		plaincode: "02087"
	},
	{
		unicode: "ðĐðŋââĪïļâðâðĻðŧ",
		plaincode: "02088"
	},
	{
		unicode: "ðĐðŋââĪïļâðâðĻðž",
		plaincode: "02089"
	},
	{
		unicode: "ðĐðŋââĪïļâðâðĻð―",
		plaincode: "02090"
	},
	{
		unicode: "ðĐðŋââĪïļâðâðĻðū",
		plaincode: "02091"
	},
	{
		unicode: "ðĐðŋââĪïļâðâðĻðŋ",
		plaincode: "02092"
	},
	{
		unicode: "ðĻââĪïļâðâðĻ",
		plaincode: "02093"
	},
	{
		unicode: "ðĻðŧââĪïļâðâðĻðŧ",
		plaincode: "02094"
	},
	{
		unicode: "ðĻðŧââĪïļâðâðĻðž",
		plaincode: "02095"
	},
	{
		unicode: "ðĻðŧââĪïļâðâðĻð―",
		plaincode: "02096"
	},
	{
		unicode: "ðĻðŧââĪïļâðâðĻðū",
		plaincode: "02097"
	},
	{
		unicode: "ðĻðŧââĪïļâðâðĻðŋ",
		plaincode: "02098"
	},
	{
		unicode: "ðĻðžââĪïļâðâðĻðŧ",
		plaincode: "02099"
	},
	{
		unicode: "ðĻðžââĪïļâðâðĻðž",
		plaincode: "02100"
	},
	{
		unicode: "ðĻðžââĪïļâðâðĻð―",
		plaincode: "02101"
	},
	{
		unicode: "ðĻðžââĪïļâðâðĻðū",
		plaincode: "02102"
	},
	{
		unicode: "ðĻðžââĪïļâðâðĻðŋ",
		plaincode: "02103"
	},
	{
		unicode: "ðĻð―ââĪïļâðâðĻðŧ",
		plaincode: "02104"
	},
	{
		unicode: "ðĻð―ââĪïļâðâðĻðž",
		plaincode: "02105"
	},
	{
		unicode: "ðĻð―ââĪïļâðâðĻð―",
		plaincode: "02106"
	},
	{
		unicode: "ðĻð―ââĪïļâðâðĻðū",
		plaincode: "02107"
	},
	{
		unicode: "ðĻð―ââĪïļâðâðĻðŋ",
		plaincode: "02108"
	},
	{
		unicode: "ðĻðūââĪïļâðâðĻðŧ",
		plaincode: "02109"
	},
	{
		unicode: "ðĻðūââĪïļâðâðĻðž",
		plaincode: "02110"
	},
	{
		unicode: "ðĻðūââĪïļâðâðĻð―",
		plaincode: "02111"
	},
	{
		unicode: "ðĻðūââĪïļâðâðĻðū",
		plaincode: "02112"
	},
	{
		unicode: "ðĻðūââĪïļâðâðĻðŋ",
		plaincode: "02113"
	},
	{
		unicode: "ðĻðŋââĪïļâðâðĻðŧ",
		plaincode: "02114"
	},
	{
		unicode: "ðĻðŋââĪïļâðâðĻðž",
		plaincode: "02115"
	},
	{
		unicode: "ðĻðŋââĪïļâðâðĻð―",
		plaincode: "02116"
	},
	{
		unicode: "ðĻðŋââĪïļâðâðĻðū",
		plaincode: "02117"
	},
	{
		unicode: "ðĻðŋââĪïļâðâðĻðŋ",
		plaincode: "02118"
	},
	{
		unicode: "ðĐââĪïļâðâðĐ",
		plaincode: "02119"
	},
	{
		unicode: "ðĐðŧââĪïļâðâðĐðŧ",
		plaincode: "02120"
	},
	{
		unicode: "ðĐðŧââĪïļâðâðĐðž",
		plaincode: "02121"
	},
	{
		unicode: "ðĐðŧââĪïļâðâðĐð―",
		plaincode: "02122"
	},
	{
		unicode: "ðĐðŧââĪïļâðâðĐðū",
		plaincode: "02123"
	},
	{
		unicode: "ðĐðŧââĪïļâðâðĐðŋ",
		plaincode: "02124"
	},
	{
		unicode: "ðĐðžââĪïļâðâðĐðŧ",
		plaincode: "02125"
	},
	{
		unicode: "ðĐðžââĪïļâðâðĐðž",
		plaincode: "02126"
	},
	{
		unicode: "ðĐðžââĪïļâðâðĐð―",
		plaincode: "02127"
	},
	{
		unicode: "ðĐðžââĪïļâðâðĐðū",
		plaincode: "02128"
	},
	{
		unicode: "ðĐðžââĪïļâðâðĐðŋ",
		plaincode: "02129"
	},
	{
		unicode: "ðĐð―ââĪïļâðâðĐðŧ",
		plaincode: "02130"
	},
	{
		unicode: "ðĐð―ââĪïļâðâðĐðž",
		plaincode: "02131"
	},
	{
		unicode: "ðĐð―ââĪïļâðâðĐð―",
		plaincode: "02132"
	},
	{
		unicode: "ðĐð―ââĪïļâðâðĐðū",
		plaincode: "02133"
	},
	{
		unicode: "ðĐð―ââĪïļâðâðĐðŋ",
		plaincode: "02134"
	},
	{
		unicode: "ðĐðūââĪïļâðâðĐðŧ",
		plaincode: "02135"
	},
	{
		unicode: "ðĐðūââĪïļâðâðĐðž",
		plaincode: "02136"
	},
	{
		unicode: "ðĐðūââĪïļâðâðĐð―",
		plaincode: "02137"
	},
	{
		unicode: "ðĐðūââĪïļâðâðĐðū",
		plaincode: "02138"
	},
	{
		unicode: "ðĐðūââĪïļâðâðĐðŋ",
		plaincode: "02139"
	},
	{
		unicode: "ðĐðŋââĪïļâðâðĐðŧ",
		plaincode: "02140"
	},
	{
		unicode: "ðĐðŋââĪïļâðâðĐðž",
		plaincode: "02141"
	},
	{
		unicode: "ðĐðŋââĪïļâðâðĐð―",
		plaincode: "02142"
	},
	{
		unicode: "ðĐðŋââĪïļâðâðĐðū",
		plaincode: "02143"
	},
	{
		unicode: "ðĐðŋââĪïļâðâðĐðŋ",
		plaincode: "02144"
	},
	{
		unicode: "ð",
		plaincode: "02145"
	},
	{
		unicode: "ððŧ",
		plaincode: "02146"
	},
	{
		unicode: "ððž",
		plaincode: "02147"
	},
	{
		unicode: "ðð―",
		plaincode: "02148"
	},
	{
		unicode: "ððū",
		plaincode: "02149"
	},
	{
		unicode: "ððŋ",
		plaincode: "02150"
	},
	{
		unicode: "ð§ðŧââĪïļâð§ðž",
		plaincode: "02151"
	},
	{
		unicode: "ð§ðŧââĪïļâð§ð―",
		plaincode: "02152"
	},
	{
		unicode: "ð§ðŧââĪïļâð§ðū",
		plaincode: "02153"
	},
	{
		unicode: "ð§ðŧââĪïļâð§ðŋ",
		plaincode: "02154"
	},
	{
		unicode: "ð§ðžââĪïļâð§ðŧ",
		plaincode: "02155"
	},
	{
		unicode: "ð§ðžââĪïļâð§ð―",
		plaincode: "02156"
	},
	{
		unicode: "ð§ðžââĪïļâð§ðū",
		plaincode: "02157"
	},
	{
		unicode: "ð§ðžââĪïļâð§ðŋ",
		plaincode: "02158"
	},
	{
		unicode: "ð§ð―ââĪïļâð§ðŧ",
		plaincode: "02159"
	},
	{
		unicode: "ð§ð―ââĪïļâð§ðž",
		plaincode: "02160"
	},
	{
		unicode: "ð§ð―ââĪïļâð§ðū",
		plaincode: "02161"
	},
	{
		unicode: "ð§ð―ââĪïļâð§ðŋ",
		plaincode: "02162"
	},
	{
		unicode: "ð§ðūââĪïļâð§ðŧ",
		plaincode: "02163"
	},
	{
		unicode: "ð§ðūââĪïļâð§ðž",
		plaincode: "02164"
	},
	{
		unicode: "ð§ðūââĪïļâð§ð―",
		plaincode: "02165"
	},
	{
		unicode: "ð§ðūââĪïļâð§ðŋ",
		plaincode: "02166"
	},
	{
		unicode: "ð§ðŋââĪïļâð§ðŧ",
		plaincode: "02167"
	},
	{
		unicode: "ð§ðŋââĪïļâð§ðž",
		plaincode: "02168"
	},
	{
		unicode: "ð§ðŋââĪïļâð§ð―",
		plaincode: "02169"
	},
	{
		unicode: "ð§ðŋââĪïļâð§ðū",
		plaincode: "02170"
	},
	{
		unicode: "ðĐââĪïļâðĻ",
		plaincode: "02171"
	},
	{
		unicode: "ðĐðŧââĪïļâðĻðŧ",
		plaincode: "02172"
	},
	{
		unicode: "ðĐðŧââĪïļâðĻðž",
		plaincode: "02173"
	},
	{
		unicode: "ðĐðŧââĪïļâðĻð―",
		plaincode: "02174"
	},
	{
		unicode: "ðĐðŧââĪïļâðĻðū",
		plaincode: "02175"
	},
	{
		unicode: "ðĐðŧââĪïļâðĻðŋ",
		plaincode: "02176"
	},
	{
		unicode: "ðĐðžââĪïļâðĻðŧ",
		plaincode: "02177"
	},
	{
		unicode: "ðĐðžââĪïļâðĻðž",
		plaincode: "02178"
	},
	{
		unicode: "ðĐðžââĪïļâðĻð―",
		plaincode: "02179"
	},
	{
		unicode: "ðĐðžââĪïļâðĻðū",
		plaincode: "02180"
	},
	{
		unicode: "ðĐðžââĪïļâðĻðŋ",
		plaincode: "02181"
	},
	{
		unicode: "ðĐð―ââĪïļâðĻðŧ",
		plaincode: "02182"
	},
	{
		unicode: "ðĐð―ââĪïļâðĻðž",
		plaincode: "02183"
	},
	{
		unicode: "ðĐð―ââĪïļâðĻð―",
		plaincode: "02184"
	},
	{
		unicode: "ðĐð―ââĪïļâðĻðū",
		plaincode: "02185"
	},
	{
		unicode: "ðĐð―ââĪïļâðĻðŋ",
		plaincode: "02186"
	},
	{
		unicode: "ðĐðūââĪïļâðĻðŧ",
		plaincode: "02187"
	},
	{
		unicode: "ðĐðūââĪïļâðĻðž",
		plaincode: "02188"
	},
	{
		unicode: "ðĐðūââĪïļâðĻð―",
		plaincode: "02189"
	},
	{
		unicode: "ðĐðūââĪïļâðĻðū",
		plaincode: "02190"
	},
	{
		unicode: "ðĐðūââĪïļâðĻðŋ",
		plaincode: "02191"
	},
	{
		unicode: "ðĐðŋââĪïļâðĻðŧ",
		plaincode: "02192"
	},
	{
		unicode: "ðĐðŋââĪïļâðĻðž",
		plaincode: "02193"
	},
	{
		unicode: "ðĐðŋââĪïļâðĻð―",
		plaincode: "02194"
	},
	{
		unicode: "ðĐðŋââĪïļâðĻðū",
		plaincode: "02195"
	},
	{
		unicode: "ðĐðŋââĪïļâðĻðŋ",
		plaincode: "02196"
	},
	{
		unicode: "ðĻââĪïļâðĻ",
		plaincode: "02197"
	},
	{
		unicode: "ðĻðŧââĪïļâðĻðŧ",
		plaincode: "02198"
	},
	{
		unicode: "ðĻðŧââĪïļâðĻðž",
		plaincode: "02199"
	},
	{
		unicode: "ðĻðŧââĪïļâðĻð―",
		plaincode: "02200"
	},
	{
		unicode: "ðĻðŧââĪïļâðĻðū",
		plaincode: "02201"
	},
	{
		unicode: "ðĻðŧââĪïļâðĻðŋ",
		plaincode: "02202"
	},
	{
		unicode: "ðĻðžââĪïļâðĻðŧ",
		plaincode: "02203"
	},
	{
		unicode: "ðĻðžââĪïļâðĻðž",
		plaincode: "02204"
	},
	{
		unicode: "ðĻðžââĪïļâðĻð―",
		plaincode: "02205"
	},
	{
		unicode: "ðĻðžââĪïļâðĻðū",
		plaincode: "02206"
	},
	{
		unicode: "ðĻðžââĪïļâðĻðŋ",
		plaincode: "02207"
	},
	{
		unicode: "ðĻð―ââĪïļâðĻðŧ",
		plaincode: "02208"
	},
	{
		unicode: "ðĻð―ââĪïļâðĻðž",
		plaincode: "02209"
	},
	{
		unicode: "ðĻð―ââĪïļâðĻð―",
		plaincode: "02210"
	},
	{
		unicode: "ðĻð―ââĪïļâðĻðū",
		plaincode: "02211"
	},
	{
		unicode: "ðĻð―ââĪïļâðĻðŋ",
		plaincode: "02212"
	},
	{
		unicode: "ðĻðūââĪïļâðĻðŧ",
		plaincode: "02213"
	},
	{
		unicode: "ðĻðūââĪïļâðĻðž",
		plaincode: "02214"
	},
	{
		unicode: "ðĻðūââĪïļâðĻð―",
		plaincode: "02215"
	},
	{
		unicode: "ðĻðūââĪïļâðĻðū",
		plaincode: "02216"
	},
	{
		unicode: "ðĻðūââĪïļâðĻðŋ",
		plaincode: "02217"
	},
	{
		unicode: "ðĻðŋââĪïļâðĻðŧ",
		plaincode: "02218"
	},
	{
		unicode: "ðĻðŋââĪïļâðĻðž",
		plaincode: "02219"
	},
	{
		unicode: "ðĻðŋââĪïļâðĻð―",
		plaincode: "02220"
	},
	{
		unicode: "ðĻðŋââĪïļâðĻðū",
		plaincode: "02221"
	},
	{
		unicode: "ðĻðŋââĪïļâðĻðŋ",
		plaincode: "02222"
	},
	{
		unicode: "ðĐââĪïļâðĐ",
		plaincode: "02223"
	},
	{
		unicode: "ðĐðŧââĪïļâðĐðŧ",
		plaincode: "02224"
	},
	{
		unicode: "ðĐðŧââĪïļâðĐðž",
		plaincode: "02225"
	},
	{
		unicode: "ðĐðŧââĪïļâðĐð―",
		plaincode: "02226"
	},
	{
		unicode: "ðĐðŧââĪïļâðĐðū",
		plaincode: "02227"
	},
	{
		unicode: "ðĐðŧââĪïļâðĐðŋ",
		plaincode: "02228"
	},
	{
		unicode: "ðĐðžââĪïļâðĐðŧ",
		plaincode: "02229"
	},
	{
		unicode: "ðĐðžââĪïļâðĐðž",
		plaincode: "02230"
	},
	{
		unicode: "ðĐðžââĪïļâðĐð―",
		plaincode: "02231"
	},
	{
		unicode: "ðĐðžââĪïļâðĐðū",
		plaincode: "02232"
	},
	{
		unicode: "ðĐðžââĪïļâðĐðŋ",
		plaincode: "02233"
	},
	{
		unicode: "ðĐð―ââĪïļâðĐðŧ",
		plaincode: "02234"
	},
	{
		unicode: "ðĐð―ââĪïļâðĐðž",
		plaincode: "02235"
	},
	{
		unicode: "ðĐð―ââĪïļâðĐð―",
		plaincode: "02236"
	},
	{
		unicode: "ðĐð―ââĪïļâðĐðū",
		plaincode: "02237"
	},
	{
		unicode: "ðĐð―ââĪïļâðĐðŋ",
		plaincode: "02238"
	},
	{
		unicode: "ðĐðūââĪïļâðĐðŧ",
		plaincode: "02239"
	},
	{
		unicode: "ðĐðūââĪïļâðĐðž",
		plaincode: "02240"
	},
	{
		unicode: "ðĐðūââĪïļâðĐð―",
		plaincode: "02241"
	},
	{
		unicode: "ðĐðūââĪïļâðĐðū",
		plaincode: "02242"
	},
	{
		unicode: "ðĐðūââĪïļâðĐðŋ",
		plaincode: "02243"
	},
	{
		unicode: "ðĐðŋââĪïļâðĐðŧ",
		plaincode: "02244"
	},
	{
		unicode: "ðĐðŋââĪïļâðĐðž",
		plaincode: "02245"
	},
	{
		unicode: "ðĐðŋââĪïļâðĐð―",
		plaincode: "02246"
	},
	{
		unicode: "ðĐðŋââĪïļâðĐðū",
		plaincode: "02247"
	},
	{
		unicode: "ðĐðŋââĪïļâðĐðŋ",
		plaincode: "02248"
	},
	{
		unicode: "ðŠ",
		plaincode: "02249"
	},
	{
		unicode: "ðĻâðĐâðĶ",
		plaincode: "02250"
	},
	{
		unicode: "ðĻâðĐâð§",
		plaincode: "02251"
	},
	{
		unicode: "ðĻâðĐâð§âðĶ",
		plaincode: "02252"
	},
	{
		unicode: "ðĻâðĐâðĶâðĶ",
		plaincode: "02253"
	},
	{
		unicode: "ðĻâðĐâð§âð§",
		plaincode: "02254"
	},
	{
		unicode: "ðĻâðĻâðĶ",
		plaincode: "02255"
	},
	{
		unicode: "ðĻâðĻâð§",
		plaincode: "02256"
	},
	{
		unicode: "ðĻâðĻâð§âðĶ",
		plaincode: "02257"
	},
	{
		unicode: "ðĻâðĻâðĶâðĶ",
		plaincode: "02258"
	},
	{
		unicode: "ðĻâðĻâð§âð§",
		plaincode: "02259"
	},
	{
		unicode: "ðĐâðĐâðĶ",
		plaincode: "02260"
	},
	{
		unicode: "ðĐâðĐâð§",
		plaincode: "02261"
	},
	{
		unicode: "ðĐâðĐâð§âðĶ",
		plaincode: "02262"
	},
	{
		unicode: "ðĐâðĐâðĶâðĶ",
		plaincode: "02263"
	},
	{
		unicode: "ðĐâðĐâð§âð§",
		plaincode: "02264"
	},
	{
		unicode: "ðĻâðĶ",
		plaincode: "02265"
	},
	{
		unicode: "ðĻâðĶâðĶ",
		plaincode: "02266"
	},
	{
		unicode: "ðĻâð§",
		plaincode: "02267"
	},
	{
		unicode: "ðĻâð§âðĶ",
		plaincode: "02268"
	},
	{
		unicode: "ðĻâð§âð§",
		plaincode: "02269"
	},
	{
		unicode: "ðĐâðĶ",
		plaincode: "02270"
	},
	{
		unicode: "ðĐâðĶâðĶ",
		plaincode: "02271"
	},
	{
		unicode: "ðĐâð§",
		plaincode: "02272"
	},
	{
		unicode: "ðĐâð§âðĶ",
		plaincode: "02273"
	},
	{
		unicode: "ðĐâð§âð§",
		plaincode: "02274"
	},
	{
		unicode: "ðĪ",
		plaincode: "02275"
	},
	{
		unicode: "ðĨ",
		plaincode: "02276"
	},
	{
		unicode: "ðŦ",
		plaincode: "02277"
	},
	{
		unicode: "ðĢ",
		plaincode: "02278"
	},
	{
		unicode: "ðŧ",
		plaincode: "02279"
	},
	{
		unicode: "ðž",
		plaincode: "02280"
	},
	{
		unicode: "ð―",
		plaincode: "02281"
	},
	{
		unicode: "ðū",
		plaincode: "02282"
	},
	{
		unicode: "ðŋ",
		plaincode: "02283"
	},
	{
		unicode: "ðĶ°",
		plaincode: "02284"
	},
	{
		unicode: "ðĶą",
		plaincode: "02285"
	},
	{
		unicode: "ðĶģ",
		plaincode: "02286"
	},
	{
		unicode: "ðĶē",
		plaincode: "02287"
	},
	{
		unicode: "ðĩ",
		plaincode: "02288"
	},
	{
		unicode: "ð",
		plaincode: "02289"
	},
	{
		unicode: "ðĶ",
		plaincode: "02290"
	},
	{
		unicode: "ðĶ§",
		plaincode: "02291"
	},
	{
		unicode: "ðķ",
		plaincode: "02292"
	},
	{
		unicode: "ð",
		plaincode: "02293"
	},
	{
		unicode: "ðĶŪ",
		plaincode: "02294"
	},
	{
		unicode: "ðâðĶš",
		plaincode: "02295"
	},
	{
		unicode: "ðĐ",
		plaincode: "02296"
	},
	{
		unicode: "ðš",
		plaincode: "02297"
	},
	{
		unicode: "ðĶ",
		plaincode: "02298"
	},
	{
		unicode: "ðĶ",
		plaincode: "02299"
	},
	{
		unicode: "ðą",
		plaincode: "02300"
	},
	{
		unicode: "ð",
		plaincode: "02301"
	},
	{
		unicode: "ðââŽ",
		plaincode: "02302"
	},
	{
		unicode: "ðĶ",
		plaincode: "02303"
	},
	{
		unicode: "ðŊ",
		plaincode: "02304"
	},
	{
		unicode: "ð",
		plaincode: "02305"
	},
	{
		unicode: "ð",
		plaincode: "02306"
	},
	{
		unicode: "ðī",
		plaincode: "02307"
	},
	{
		unicode: "ð",
		plaincode: "02308"
	},
	{
		unicode: "ðĶ",
		plaincode: "02309"
	},
	{
		unicode: "ðĶ",
		plaincode: "02310"
	},
	{
		unicode: "ðĶ",
		plaincode: "02311"
	},
	{
		unicode: "ðĶŽ",
		plaincode: "02312"
	},
	{
		unicode: "ðŪ",
		plaincode: "02313"
	},
	{
		unicode: "ð",
		plaincode: "02314"
	},
	{
		unicode: "ð",
		plaincode: "02315"
	},
	{
		unicode: "ð",
		plaincode: "02316"
	},
	{
		unicode: "ð·",
		plaincode: "02317"
	},
	{
		unicode: "ð",
		plaincode: "02318"
	},
	{
		unicode: "ð",
		plaincode: "02319"
	},
	{
		unicode: "ð―",
		plaincode: "02320"
	},
	{
		unicode: "ð",
		plaincode: "02321"
	},
	{
		unicode: "ð",
		plaincode: "02322"
	},
	{
		unicode: "ð",
		plaincode: "02323"
	},
	{
		unicode: "ðŠ",
		plaincode: "02324"
	},
	{
		unicode: "ðŦ",
		plaincode: "02325"
	},
	{
		unicode: "ðĶ",
		plaincode: "02326"
	},
	{
		unicode: "ðĶ",
		plaincode: "02327"
	},
	{
		unicode: "ð",
		plaincode: "02328"
	},
	{
		unicode: "ðĶĢ",
		plaincode: "02329"
	},
	{
		unicode: "ðĶ",
		plaincode: "02330"
	},
	{
		unicode: "ðĶ",
		plaincode: "02331"
	},
	{
		unicode: "ð­",
		plaincode: "02332"
	},
	{
		unicode: "ð",
		plaincode: "02333"
	},
	{
		unicode: "ð",
		plaincode: "02334"
	},
	{
		unicode: "ðđ",
		plaincode: "02335"
	},
	{
		unicode: "ð°",
		plaincode: "02336"
	},
	{
		unicode: "ð",
		plaincode: "02337"
	},
	{
		unicode: "ðĶŦ",
		plaincode: "02338"
	},
	{
		unicode: "ðĶ",
		plaincode: "02339"
	},
	{
		unicode: "ðĶ",
		plaincode: "02340"
	},
	{
		unicode: "ðŧ",
		plaincode: "02341"
	},
	{
		unicode: "ðŧââïļ",
		plaincode: "02342"
	},
	{
		unicode: "ðĻ",
		plaincode: "02343"
	},
	{
		unicode: "ðž",
		plaincode: "02344"
	},
	{
		unicode: "ðĶĨ",
		plaincode: "02345"
	},
	{
		unicode: "ðĶĶ",
		plaincode: "02346"
	},
	{
		unicode: "ðĶĻ",
		plaincode: "02347"
	},
	{
		unicode: "ðĶ",
		plaincode: "02348"
	},
	{
		unicode: "ðĶĄ",
		plaincode: "02349"
	},
	{
		unicode: "ðū",
		plaincode: "02350"
	},
	{
		unicode: "ðĶ",
		plaincode: "02351"
	},
	{
		unicode: "ð",
		plaincode: "02352"
	},
	{
		unicode: "ð",
		plaincode: "02353"
	},
	{
		unicode: "ðĢ",
		plaincode: "02354"
	},
	{
		unicode: "ðĪ",
		plaincode: "02355"
	},
	{
		unicode: "ðĨ",
		plaincode: "02356"
	},
	{
		unicode: "ðĶ",
		plaincode: "02357"
	},
	{
		unicode: "ð§",
		plaincode: "02358"
	},
	{
		unicode: "ðĶ",
		plaincode: "02359"
	},
	{
		unicode: "ðĶ",
		plaincode: "02360"
	},
	{
		unicode: "ðĶĒ",
		plaincode: "02361"
	},
	{
		unicode: "ðĶ",
		plaincode: "02362"
	},
	{
		unicode: "ðĶĪ",
		plaincode: "02363"
	},
	{
		unicode: "ðŠķ",
		plaincode: "02364"
	},
	{
		unicode: "ðĶĐ",
		plaincode: "02365"
	},
	{
		unicode: "ðĶ",
		plaincode: "02366"
	},
	{
		unicode: "ðĶ",
		plaincode: "02367"
	},
	{
		unicode: "ðļ",
		plaincode: "02368"
	},
	{
		unicode: "ð",
		plaincode: "02369"
	},
	{
		unicode: "ðĒ",
		plaincode: "02370"
	},
	{
		unicode: "ðĶ",
		plaincode: "02371"
	},
	{
		unicode: "ð",
		plaincode: "02372"
	},
	{
		unicode: "ðē",
		plaincode: "02373"
	},
	{
		unicode: "ð",
		plaincode: "02374"
	},
	{
		unicode: "ðĶ",
		plaincode: "02375"
	},
	{
		unicode: "ðĶ",
		plaincode: "02376"
	},
	{
		unicode: "ðģ",
		plaincode: "02377"
	},
	{
		unicode: "ð",
		plaincode: "02378"
	},
	{
		unicode: "ðŽ",
		plaincode: "02379"
	},
	{
		unicode: "ðĶ­",
		plaincode: "02380"
	},
	{
		unicode: "ð",
		plaincode: "02381"
	},
	{
		unicode: "ð ",
		plaincode: "02382"
	},
	{
		unicode: "ðĄ",
		plaincode: "02383"
	},
	{
		unicode: "ðĶ",
		plaincode: "02384"
	},
	{
		unicode: "ð",
		plaincode: "02385"
	},
	{
		unicode: "ð",
		plaincode: "02386"
	},
	{
		unicode: "ðŠļ",
		plaincode: "02387"
	},
	{
		unicode: "ð",
		plaincode: "02388"
	},
	{
		unicode: "ðĶ",
		plaincode: "02389"
	},
	{
		unicode: "ð",
		plaincode: "02390"
	},
	{
		unicode: "ð",
		plaincode: "02391"
	},
	{
		unicode: "ð",
		plaincode: "02392"
	},
	{
		unicode: "ðŠē",
		plaincode: "02393"
	},
	{
		unicode: "ð",
		plaincode: "02394"
	},
	{
		unicode: "ðĶ",
		plaincode: "02395"
	},
	{
		unicode: "ðŠģ",
		plaincode: "02396"
	},
	{
		unicode: "ðĶ",
		plaincode: "02397"
	},
	{
		unicode: "ðĶ",
		plaincode: "02398"
	},
	{
		unicode: "ðŠ°",
		plaincode: "02399"
	},
	{
		unicode: "ðŠą",
		plaincode: "02400"
	},
	{
		unicode: "ðĶ ",
		plaincode: "02401"
	},
	{
		unicode: "ð",
		plaincode: "02402"
	},
	{
		unicode: "ðļ",
		plaincode: "02403"
	},
	{
		unicode: "ðŪ",
		plaincode: "02404"
	},
	{
		unicode: "ðŠ·",
		plaincode: "02405"
	},
	{
		unicode: "ðđ",
		plaincode: "02406"
	},
	{
		unicode: "ðĨ",
		plaincode: "02407"
	},
	{
		unicode: "ðš",
		plaincode: "02408"
	},
	{
		unicode: "ðŧ",
		plaincode: "02409"
	},
	{
		unicode: "ðž",
		plaincode: "02410"
	},
	{
		unicode: "ð·",
		plaincode: "02411"
	},
	{
		unicode: "ðą",
		plaincode: "02412"
	},
	{
		unicode: "ðŠī",
		plaincode: "02413"
	},
	{
		unicode: "ðē",
		plaincode: "02414"
	},
	{
		unicode: "ðģ",
		plaincode: "02415"
	},
	{
		unicode: "ðī",
		plaincode: "02416"
	},
	{
		unicode: "ðĩ",
		plaincode: "02417"
	},
	{
		unicode: "ðū",
		plaincode: "02418"
	},
	{
		unicode: "ðŋ",
		plaincode: "02419"
	},
	{
		unicode: "ð",
		plaincode: "02420"
	},
	{
		unicode: "ð",
		plaincode: "02421"
	},
	{
		unicode: "ð",
		plaincode: "02422"
	},
	{
		unicode: "ð",
		plaincode: "02423"
	},
	{
		unicode: "ðŠđ",
		plaincode: "02424"
	},
	{
		unicode: "ðŠš",
		plaincode: "02425"
	},
	{
		unicode: "ð",
		plaincode: "02426"
	},
	{
		unicode: "ð",
		plaincode: "02427"
	},
	{
		unicode: "ð",
		plaincode: "02428"
	},
	{
		unicode: "ð",
		plaincode: "02429"
	},
	{
		unicode: "ð",
		plaincode: "02430"
	},
	{
		unicode: "ð",
		plaincode: "02431"
	},
	{
		unicode: "ð",
		plaincode: "02432"
	},
	{
		unicode: "ðĨ­",
		plaincode: "02433"
	},
	{
		unicode: "ð",
		plaincode: "02434"
	},
	{
		unicode: "ð",
		plaincode: "02435"
	},
	{
		unicode: "ð",
		plaincode: "02436"
	},
	{
		unicode: "ð",
		plaincode: "02437"
	},
	{
		unicode: "ð",
		plaincode: "02438"
	},
	{
		unicode: "ð",
		plaincode: "02439"
	},
	{
		unicode: "ðŦ",
		plaincode: "02440"
	},
	{
		unicode: "ðĨ",
		plaincode: "02441"
	},
	{
		unicode: "ð",
		plaincode: "02442"
	},
	{
		unicode: "ðŦ",
		plaincode: "02443"
	},
	{
		unicode: "ðĨĨ",
		plaincode: "02444"
	},
	{
		unicode: "ðĨ",
		plaincode: "02445"
	},
	{
		unicode: "ð",
		plaincode: "02446"
	},
	{
		unicode: "ðĨ",
		plaincode: "02447"
	},
	{
		unicode: "ðĨ",
		plaincode: "02448"
	},
	{
		unicode: "ð―",
		plaincode: "02449"
	},
	{
		unicode: "ðŦ",
		plaincode: "02450"
	},
	{
		unicode: "ðĨ",
		plaincode: "02451"
	},
	{
		unicode: "ðĨŽ",
		plaincode: "02452"
	},
	{
		unicode: "ðĨĶ",
		plaincode: "02453"
	},
	{
		unicode: "ð§",
		plaincode: "02454"
	},
	{
		unicode: "ð§",
		plaincode: "02455"
	},
	{
		unicode: "ð",
		plaincode: "02456"
	},
	{
		unicode: "ðĨ",
		plaincode: "02457"
	},
	{
		unicode: "ðŦ",
		plaincode: "02458"
	},
	{
		unicode: "ð°",
		plaincode: "02459"
	},
	{
		unicode: "ð",
		plaincode: "02460"
	},
	{
		unicode: "ðĨ",
		plaincode: "02461"
	},
	{
		unicode: "ðĨ",
		plaincode: "02462"
	},
	{
		unicode: "ðŦ",
		plaincode: "02463"
	},
	{
		unicode: "ðĨĻ",
		plaincode: "02464"
	},
	{
		unicode: "ðĨŊ",
		plaincode: "02465"
	},
	{
		unicode: "ðĨ",
		plaincode: "02466"
	},
	{
		unicode: "ð§",
		plaincode: "02467"
	},
	{
		unicode: "ð§",
		plaincode: "02468"
	},
	{
		unicode: "ð",
		plaincode: "02469"
	},
	{
		unicode: "ð",
		plaincode: "02470"
	},
	{
		unicode: "ðĨĐ",
		plaincode: "02471"
	},
	{
		unicode: "ðĨ",
		plaincode: "02472"
	},
	{
		unicode: "ð",
		plaincode: "02473"
	},
	{
		unicode: "ð",
		plaincode: "02474"
	},
	{
		unicode: "ð",
		plaincode: "02475"
	},
	{
		unicode: "ð­",
		plaincode: "02476"
	},
	{
		unicode: "ðĨŠ",
		plaincode: "02477"
	},
	{
		unicode: "ðŪ",
		plaincode: "02478"
	},
	{
		unicode: "ðŊ",
		plaincode: "02479"
	},
	{
		unicode: "ðŦ",
		plaincode: "02480"
	},
	{
		unicode: "ðĨ",
		plaincode: "02481"
	},
	{
		unicode: "ð§",
		plaincode: "02482"
	},
	{
		unicode: "ðĨ",
		plaincode: "02483"
	},
	{
		unicode: "ðģ",
		plaincode: "02484"
	},
	{
		unicode: "ðĨ",
		plaincode: "02485"
	},
	{
		unicode: "ðē",
		plaincode: "02486"
	},
	{
		unicode: "ðŦ",
		plaincode: "02487"
	},
	{
		unicode: "ðĨĢ",
		plaincode: "02488"
	},
	{
		unicode: "ðĨ",
		plaincode: "02489"
	},
	{
		unicode: "ðŋ",
		plaincode: "02490"
	},
	{
		unicode: "ð§",
		plaincode: "02491"
	},
	{
		unicode: "ð§",
		plaincode: "02492"
	},
	{
		unicode: "ðĨŦ",
		plaincode: "02493"
	},
	{
		unicode: "ðą",
		plaincode: "02494"
	},
	{
		unicode: "ð",
		plaincode: "02495"
	},
	{
		unicode: "ð",
		plaincode: "02496"
	},
	{
		unicode: "ð",
		plaincode: "02497"
	},
	{
		unicode: "ð",
		plaincode: "02498"
	},
	{
		unicode: "ð",
		plaincode: "02499"
	},
	{
		unicode: "ð",
		plaincode: "02500"
	},
	{
		unicode: "ð ",
		plaincode: "02501"
	},
	{
		unicode: "ðĒ",
		plaincode: "02502"
	},
	{
		unicode: "ðĢ",
		plaincode: "02503"
	},
	{
		unicode: "ðĪ",
		plaincode: "02504"
	},
	{
		unicode: "ðĨ",
		plaincode: "02505"
	},
	{
		unicode: "ðĨŪ",
		plaincode: "02506"
	},
	{
		unicode: "ðĄ",
		plaincode: "02507"
	},
	{
		unicode: "ðĨ",
		plaincode: "02508"
	},
	{
		unicode: "ðĨ ",
		plaincode: "02509"
	},
	{
		unicode: "ðĨĄ",
		plaincode: "02510"
	},
	{
		unicode: "ðĶ",
		plaincode: "02511"
	},
	{
		unicode: "ðĶ",
		plaincode: "02512"
	},
	{
		unicode: "ðĶ",
		plaincode: "02513"
	},
	{
		unicode: "ðĶ",
		plaincode: "02514"
	},
	{
		unicode: "ðĶŠ",
		plaincode: "02515"
	},
	{
		unicode: "ðĶ",
		plaincode: "02516"
	},
	{
		unicode: "ð§",
		plaincode: "02517"
	},
	{
		unicode: "ðĻ",
		plaincode: "02518"
	},
	{
		unicode: "ðĐ",
		plaincode: "02519"
	},
	{
		unicode: "ðŠ",
		plaincode: "02520"
	},
	{
		unicode: "ð",
		plaincode: "02521"
	},
	{
		unicode: "ð°",
		plaincode: "02522"
	},
	{
		unicode: "ð§",
		plaincode: "02523"
	},
	{
		unicode: "ðĨ§",
		plaincode: "02524"
	},
	{
		unicode: "ðŦ",
		plaincode: "02525"
	},
	{
		unicode: "ðŽ",
		plaincode: "02526"
	},
	{
		unicode: "ð­",
		plaincode: "02527"
	},
	{
		unicode: "ðŪ",
		plaincode: "02528"
	},
	{
		unicode: "ðŊ",
		plaincode: "02529"
	},
	{
		unicode: "ðž",
		plaincode: "02530"
	},
	{
		unicode: "ðĨ",
		plaincode: "02531"
	},
	{
		unicode: "â",
		plaincode: "02532"
	},
	{
		unicode: "ðŦ",
		plaincode: "02533"
	},
	{
		unicode: "ðĩ",
		plaincode: "02534"
	},
	{
		unicode: "ðķ",
		plaincode: "02535"
	},
	{
		unicode: "ðū",
		plaincode: "02536"
	},
	{
		unicode: "ð·",
		plaincode: "02537"
	},
	{
		unicode: "ðļ",
		plaincode: "02538"
	},
	{
		unicode: "ðđ",
		plaincode: "02539"
	},
	{
		unicode: "ðš",
		plaincode: "02540"
	},
	{
		unicode: "ðŧ",
		plaincode: "02541"
	},
	{
		unicode: "ðĨ",
		plaincode: "02542"
	},
	{
		unicode: "ðĨ",
		plaincode: "02543"
	},
	{
		unicode: "ðŦ",
		plaincode: "02544"
	},
	{
		unicode: "ðĨĪ",
		plaincode: "02545"
	},
	{
		unicode: "ð§",
		plaincode: "02546"
	},
	{
		unicode: "ð§",
		plaincode: "02547"
	},
	{
		unicode: "ð§",
		plaincode: "02548"
	},
	{
		unicode: "ð§",
		plaincode: "02549"
	},
	{
		unicode: "ðĨĒ",
		plaincode: "02550"
	},
	{
		unicode: "ðī",
		plaincode: "02551"
	},
	{
		unicode: "ðĨ",
		plaincode: "02552"
	},
	{
		unicode: "ðŠ",
		plaincode: "02553"
	},
	{
		unicode: "ðŦ",
		plaincode: "02554"
	},
	{
		unicode: "ðš",
		plaincode: "02555"
	},
	{
		unicode: "ð",
		plaincode: "02556"
	},
	{
		unicode: "ð",
		plaincode: "02557"
	},
	{
		unicode: "ð",
		plaincode: "02558"
	},
	{
		unicode: "ð",
		plaincode: "02559"
	},
	{
		unicode: "ðū",
		plaincode: "02560"
	},
	{
		unicode: "ð§­",
		plaincode: "02561"
	},
	{
		unicode: "ð",
		plaincode: "02562"
	},
	{
		unicode: "ðŧ",
		plaincode: "02563"
	},
	{
		unicode: "ð§ą",
		plaincode: "02564"
	},
	{
		unicode: "ðŠĻ",
		plaincode: "02565"
	},
	{
		unicode: "ðŠĩ",
		plaincode: "02566"
	},
	{
		unicode: "ð",
		plaincode: "02567"
	},
	{
		unicode: "ð ",
		plaincode: "02568"
	},
	{
		unicode: "ðĄ",
		plaincode: "02569"
	},
	{
		unicode: "ðĒ",
		plaincode: "02570"
	},
	{
		unicode: "ðĢ",
		plaincode: "02571"
	},
	{
		unicode: "ðĪ",
		plaincode: "02572"
	},
	{
		unicode: "ðĨ",
		plaincode: "02573"
	},
	{
		unicode: "ðĶ",
		plaincode: "02574"
	},
	{
		unicode: "ðĻ",
		plaincode: "02575"
	},
	{
		unicode: "ðĐ",
		plaincode: "02576"
	},
	{
		unicode: "ðŠ",
		plaincode: "02577"
	},
	{
		unicode: "ðŦ",
		plaincode: "02578"
	},
	{
		unicode: "ðŽ",
		plaincode: "02579"
	},
	{
		unicode: "ð­",
		plaincode: "02580"
	},
	{
		unicode: "ðŊ",
		plaincode: "02581"
	},
	{
		unicode: "ð°",
		plaincode: "02582"
	},
	{
		unicode: "ð",
		plaincode: "02583"
	},
	{
		unicode: "ðž",
		plaincode: "02584"
	},
	{
		unicode: "ð―",
		plaincode: "02585"
	},
	{
		unicode: "âŠ",
		plaincode: "02586"
	},
	{
		unicode: "ð",
		plaincode: "02587"
	},
	{
		unicode: "ð",
		plaincode: "02588"
	},
	{
		unicode: "ð",
		plaincode: "02589"
	},
	{
		unicode: "ð",
		plaincode: "02590"
	},
	{
		unicode: "âē",
		plaincode: "02591"
	},
	{
		unicode: "âš",
		plaincode: "02592"
	},
	{
		unicode: "ð",
		plaincode: "02593"
	},
	{
		unicode: "ð",
		plaincode: "02594"
	},
	{
		unicode: "ð",
		plaincode: "02595"
	},
	{
		unicode: "ð",
		plaincode: "02596"
	},
	{
		unicode: "ð",
		plaincode: "02597"
	},
	{
		unicode: "ð",
		plaincode: "02598"
	},
	{
		unicode: "ð",
		plaincode: "02599"
	},
	{
		unicode: "ð ",
		plaincode: "02600"
	},
	{
		unicode: "ð",
		plaincode: "02601"
	},
	{
		unicode: "ðĄ",
		plaincode: "02602"
	},
	{
		unicode: "ðĒ",
		plaincode: "02603"
	},
	{
		unicode: "ð",
		plaincode: "02604"
	},
	{
		unicode: "ðŠ",
		plaincode: "02605"
	},
	{
		unicode: "ð",
		plaincode: "02606"
	},
	{
		unicode: "ð",
		plaincode: "02607"
	},
	{
		unicode: "ð",
		plaincode: "02608"
	},
	{
		unicode: "ð",
		plaincode: "02609"
	},
	{
		unicode: "ð",
		plaincode: "02610"
	},
	{
		unicode: "ð",
		plaincode: "02611"
	},
	{
		unicode: "ð",
		plaincode: "02612"
	},
	{
		unicode: "ð",
		plaincode: "02613"
	},
	{
		unicode: "ð",
		plaincode: "02614"
	},
	{
		unicode: "ð",
		plaincode: "02615"
	},
	{
		unicode: "ð",
		plaincode: "02616"
	},
	{
		unicode: "ð",
		plaincode: "02617"
	},
	{
		unicode: "ð",
		plaincode: "02618"
	},
	{
		unicode: "ð",
		plaincode: "02619"
	},
	{
		unicode: "ð",
		plaincode: "02620"
	},
	{
		unicode: "ð",
		plaincode: "02621"
	},
	{
		unicode: "ð",
		plaincode: "02622"
	},
	{
		unicode: "ð",
		plaincode: "02623"
	},
	{
		unicode: "ð",
		plaincode: "02624"
	},
	{
		unicode: "ð",
		plaincode: "02625"
	},
	{
		unicode: "ð",
		plaincode: "02626"
	},
	{
		unicode: "ð",
		plaincode: "02627"
	},
	{
		unicode: "ð",
		plaincode: "02628"
	},
	{
		unicode: "ð",
		plaincode: "02629"
	},
	{
		unicode: "ð",
		plaincode: "02630"
	},
	{
		unicode: "ðŧ",
		plaincode: "02631"
	},
	{
		unicode: "ð",
		plaincode: "02632"
	},
	{
		unicode: "ð",
		plaincode: "02633"
	},
	{
		unicode: "ð",
		plaincode: "02634"
	},
	{
		unicode: "ðĩ",
		plaincode: "02635"
	},
	{
		unicode: "ðĶ―",
		plaincode: "02636"
	},
	{
		unicode: "ðĶž",
		plaincode: "02637"
	},
	{
		unicode: "ðš",
		plaincode: "02638"
	},
	{
		unicode: "ðē",
		plaincode: "02639"
	},
	{
		unicode: "ðī",
		plaincode: "02640"
	},
	{
		unicode: "ðđ",
		plaincode: "02641"
	},
	{
		unicode: "ðž",
		plaincode: "02642"
	},
	{
		unicode: "ð",
		plaincode: "02643"
	},
	{
		unicode: "â―",
		plaincode: "02644"
	},
	{
		unicode: "ð",
		plaincode: "02645"
	},
	{
		unicode: "ðĻ",
		plaincode: "02646"
	},
	{
		unicode: "ðĨ",
		plaincode: "02647"
	},
	{
		unicode: "ðĶ",
		plaincode: "02648"
	},
	{
		unicode: "ð",
		plaincode: "02649"
	},
	{
		unicode: "ð§",
		plaincode: "02650"
	},
	{
		unicode: "â",
		plaincode: "02651"
	},
	{
		unicode: "ð",
		plaincode: "02652"
	},
	{
		unicode: "âĩ",
		plaincode: "02653"
	},
	{
		unicode: "ðķ",
		plaincode: "02654"
	},
	{
		unicode: "ðĪ",
		plaincode: "02655"
	},
	{
		unicode: "ðĒ",
		plaincode: "02656"
	},
	{
		unicode: "ðŦ",
		plaincode: "02657"
	},
	{
		unicode: "ðŽ",
		plaincode: "02658"
	},
	{
		unicode: "ðŠ",
		plaincode: "02659"
	},
	{
		unicode: "ðš",
		plaincode: "02660"
	},
	{
		unicode: "ð",
		plaincode: "02661"
	},
	{
		unicode: "ð",
		plaincode: "02662"
	},
	{
		unicode: "ð ",
		plaincode: "02663"
	},
	{
		unicode: "ðĄ",
		plaincode: "02664"
	},
	{
		unicode: "ð",
		plaincode: "02665"
	},
	{
		unicode: "ðļ",
		plaincode: "02666"
	},
	{
		unicode: "ð§ģ",
		plaincode: "02667"
	},
	{
		unicode: "â",
		plaincode: "02668"
	},
	{
		unicode: "âģ",
		plaincode: "02669"
	},
	{
		unicode: "â",
		plaincode: "02670"
	},
	{
		unicode: "â°",
		plaincode: "02671"
	},
	{
		unicode: "ð",
		plaincode: "02672"
	},
	{
		unicode: "ð§",
		plaincode: "02673"
	},
	{
		unicode: "ð",
		plaincode: "02674"
	},
	{
		unicode: "ð",
		plaincode: "02675"
	},
	{
		unicode: "ð",
		plaincode: "02676"
	},
	{
		unicode: "ð",
		plaincode: "02677"
	},
	{
		unicode: "ð",
		plaincode: "02678"
	},
	{
		unicode: "ð",
		plaincode: "02679"
	},
	{
		unicode: "ð",
		plaincode: "02680"
	},
	{
		unicode: "ð",
		plaincode: "02681"
	},
	{
		unicode: "ð",
		plaincode: "02682"
	},
	{
		unicode: "ð ",
		plaincode: "02683"
	},
	{
		unicode: "ð",
		plaincode: "02684"
	},
	{
		unicode: "ðĄ",
		plaincode: "02685"
	},
	{
		unicode: "ð",
		plaincode: "02686"
	},
	{
		unicode: "ðĒ",
		plaincode: "02687"
	},
	{
		unicode: "ð",
		plaincode: "02688"
	},
	{
		unicode: "ðĢ",
		plaincode: "02689"
	},
	{
		unicode: "ð",
		plaincode: "02690"
	},
	{
		unicode: "ðĪ",
		plaincode: "02691"
	},
	{
		unicode: "ð",
		plaincode: "02692"
	},
	{
		unicode: "ðĨ",
		plaincode: "02693"
	},
	{
		unicode: "ð",
		plaincode: "02694"
	},
	{
		unicode: "ðĶ",
		plaincode: "02695"
	},
	{
		unicode: "ð",
		plaincode: "02696"
	},
	{
		unicode: "ð",
		plaincode: "02697"
	},
	{
		unicode: "ð",
		plaincode: "02698"
	},
	{
		unicode: "ð",
		plaincode: "02699"
	},
	{
		unicode: "ð",
		plaincode: "02700"
	},
	{
		unicode: "ð",
		plaincode: "02701"
	},
	{
		unicode: "ð",
		plaincode: "02702"
	},
	{
		unicode: "ð",
		plaincode: "02703"
	},
	{
		unicode: "ð",
		plaincode: "02704"
	},
	{
		unicode: "ð",
		plaincode: "02705"
	},
	{
		unicode: "ð",
		plaincode: "02706"
	},
	{
		unicode: "ð",
		plaincode: "02707"
	},
	{
		unicode: "ð",
		plaincode: "02708"
	},
	{
		unicode: "ð",
		plaincode: "02709"
	},
	{
		unicode: "ðŠ",
		plaincode: "02710"
	},
	{
		unicode: "â­",
		plaincode: "02711"
	},
	{
		unicode: "ð",
		plaincode: "02712"
	},
	{
		unicode: "ð ",
		plaincode: "02713"
	},
	{
		unicode: "ð",
		plaincode: "02714"
	},
	{
		unicode: "â",
		plaincode: "02715"
	},
	{
		unicode: "ð",
		plaincode: "02716"
	},
	{
		unicode: "ð",
		plaincode: "02717"
	},
	{
		unicode: "ð",
		plaincode: "02718"
	},
	{
		unicode: "â",
		plaincode: "02719"
	},
	{
		unicode: "âĄ",
		plaincode: "02720"
	},
	{
		unicode: "â",
		plaincode: "02721"
	},
	{
		unicode: "ðĨ",
		plaincode: "02722"
	},
	{
		unicode: "ð§",
		plaincode: "02723"
	},
	{
		unicode: "ð",
		plaincode: "02724"
	},
	{
		unicode: "ð",
		plaincode: "02725"
	},
	{
		unicode: "ð",
		plaincode: "02726"
	},
	{
		unicode: "ð",
		plaincode: "02727"
	},
	{
		unicode: "ð",
		plaincode: "02728"
	},
	{
		unicode: "ð§Ļ",
		plaincode: "02729"
	},
	{
		unicode: "âĻ",
		plaincode: "02730"
	},
	{
		unicode: "ð",
		plaincode: "02731"
	},
	{
		unicode: "ð",
		plaincode: "02732"
	},
	{
		unicode: "ð",
		plaincode: "02733"
	},
	{
		unicode: "ð",
		plaincode: "02734"
	},
	{
		unicode: "ð",
		plaincode: "02735"
	},
	{
		unicode: "ð",
		plaincode: "02736"
	},
	{
		unicode: "ð",
		plaincode: "02737"
	},
	{
		unicode: "ð",
		plaincode: "02738"
	},
	{
		unicode: "ð",
		plaincode: "02739"
	},
	{
		unicode: "ð§§",
		plaincode: "02740"
	},
	{
		unicode: "ð",
		plaincode: "02741"
	},
	{
		unicode: "ð",
		plaincode: "02742"
	},
	{
		unicode: "ðŦ",
		plaincode: "02743"
	},
	{
		unicode: "ð",
		plaincode: "02744"
	},
	{
		unicode: "ð",
		plaincode: "02745"
	},
	{
		unicode: "ðĨ",
		plaincode: "02746"
	},
	{
		unicode: "ðĨ",
		plaincode: "02747"
	},
	{
		unicode: "ðĨ",
		plaincode: "02748"
	},
	{
		unicode: "â―",
		plaincode: "02749"
	},
	{
		unicode: "âū",
		plaincode: "02750"
	},
	{
		unicode: "ðĨ",
		plaincode: "02751"
	},
	{
		unicode: "ð",
		plaincode: "02752"
	},
	{
		unicode: "ð",
		plaincode: "02753"
	},
	{
		unicode: "ð",
		plaincode: "02754"
	},
	{
		unicode: "ð",
		plaincode: "02755"
	},
	{
		unicode: "ðū",
		plaincode: "02756"
	},
	{
		unicode: "ðĨ",
		plaincode: "02757"
	},
	{
		unicode: "ðģ",
		plaincode: "02758"
	},
	{
		unicode: "ð",
		plaincode: "02759"
	},
	{
		unicode: "ð",
		plaincode: "02760"
	},
	{
		unicode: "ð",
		plaincode: "02761"
	},
	{
		unicode: "ðĨ",
		plaincode: "02762"
	},
	{
		unicode: "ð",
		plaincode: "02763"
	},
	{
		unicode: "ðļ",
		plaincode: "02764"
	},
	{
		unicode: "ðĨ",
		plaincode: "02765"
	},
	{
		unicode: "ðĨ",
		plaincode: "02766"
	},
	{
		unicode: "ðĨ",
		plaincode: "02767"
	},
	{
		unicode: "âģ",
		plaincode: "02768"
	},
	{
		unicode: "ðĢ",
		plaincode: "02769"
	},
	{
		unicode: "ðĪŋ",
		plaincode: "02770"
	},
	{
		unicode: "ð―",
		plaincode: "02771"
	},
	{
		unicode: "ðŋ",
		plaincode: "02772"
	},
	{
		unicode: "ð·",
		plaincode: "02773"
	},
	{
		unicode: "ðĨ",
		plaincode: "02774"
	},
	{
		unicode: "ðŊ",
		plaincode: "02775"
	},
	{
		unicode: "ðŠ",
		plaincode: "02776"
	},
	{
		unicode: "ðŠ",
		plaincode: "02777"
	},
	{
		unicode: "ðą",
		plaincode: "02778"
	},
	{
		unicode: "ðŪ",
		plaincode: "02779"
	},
	{
		unicode: "ðŠ",
		plaincode: "02780"
	},
	{
		unicode: "ð§ŋ",
		plaincode: "02781"
	},
	{
		unicode: "ðŠŽ",
		plaincode: "02782"
	},
	{
		unicode: "ðŪ",
		plaincode: "02783"
	},
	{
		unicode: "ð°",
		plaincode: "02784"
	},
	{
		unicode: "ðē",
		plaincode: "02785"
	},
	{
		unicode: "ð§Đ",
		plaincode: "02786"
	},
	{
		unicode: "ð§ļ",
		plaincode: "02787"
	},
	{
		unicode: "ðŠ",
		plaincode: "02788"
	},
	{
		unicode: "ðŠĐ",
		plaincode: "02789"
	},
	{
		unicode: "ðŠ",
		plaincode: "02790"
	},
	{
		unicode: "ð",
		plaincode: "02791"
	},
	{
		unicode: "ð",
		plaincode: "02792"
	},
	{
		unicode: "ðī",
		plaincode: "02793"
	},
	{
		unicode: "ð­",
		plaincode: "02794"
	},
	{
		unicode: "ðĻ",
		plaincode: "02795"
	},
	{
		unicode: "ð§ĩ",
		plaincode: "02796"
	},
	{
		unicode: "ðŠĄ",
		plaincode: "02797"
	},
	{
		unicode: "ð§ķ",
		plaincode: "02798"
	},
	{
		unicode: "ðŠĒ",
		plaincode: "02799"
	},
	{
		unicode: "ð",
		plaincode: "02800"
	},
	{
		unicode: "ðĨ―",
		plaincode: "02801"
	},
	{
		unicode: "ðĨž",
		plaincode: "02802"
	},
	{
		unicode: "ðĶš",
		plaincode: "02803"
	},
	{
		unicode: "ð",
		plaincode: "02804"
	},
	{
		unicode: "ð",
		plaincode: "02805"
	},
	{
		unicode: "ð",
		plaincode: "02806"
	},
	{
		unicode: "ð§Ģ",
		plaincode: "02807"
	},
	{
		unicode: "ð§Ī",
		plaincode: "02808"
	},
	{
		unicode: "ð§Ĩ",
		plaincode: "02809"
	},
	{
		unicode: "ð§Ķ",
		plaincode: "02810"
	},
	{
		unicode: "ð",
		plaincode: "02811"
	},
	{
		unicode: "ð",
		plaincode: "02812"
	},
	{
		unicode: "ðĨŧ",
		plaincode: "02813"
	},
	{
		unicode: "ðĐą",
		plaincode: "02814"
	},
	{
		unicode: "ðĐē",
		plaincode: "02815"
	},
	{
		unicode: "ðĐģ",
		plaincode: "02816"
	},
	{
		unicode: "ð",
		plaincode: "02817"
	},
	{
		unicode: "ð",
		plaincode: "02818"
	},
	{
		unicode: "ð",
		plaincode: "02819"
	},
	{
		unicode: "ð",
		plaincode: "02820"
	},
	{
		unicode: "ð",
		plaincode: "02821"
	},
	{
		unicode: "ð",
		plaincode: "02822"
	},
	{
		unicode: "ðĐī",
		plaincode: "02823"
	},
	{
		unicode: "ð",
		plaincode: "02824"
	},
	{
		unicode: "ð",
		plaincode: "02825"
	},
	{
		unicode: "ðĨū",
		plaincode: "02826"
	},
	{
		unicode: "ðĨŋ",
		plaincode: "02827"
	},
	{
		unicode: "ð ",
		plaincode: "02828"
	},
	{
		unicode: "ðĄ",
		plaincode: "02829"
	},
	{
		unicode: "ðĐ°",
		plaincode: "02830"
	},
	{
		unicode: "ðĒ",
		plaincode: "02831"
	},
	{
		unicode: "ð",
		plaincode: "02832"
	},
	{
		unicode: "ð",
		plaincode: "02833"
	},
	{
		unicode: "ðĐ",
		plaincode: "02834"
	},
	{
		unicode: "ð",
		plaincode: "02835"
	},
	{
		unicode: "ð§Ē",
		plaincode: "02836"
	},
	{
		unicode: "ðŠ",
		plaincode: "02837"
	},
	{
		unicode: "ðŋ",
		plaincode: "02838"
	},
	{
		unicode: "ð",
		plaincode: "02839"
	},
	{
		unicode: "ð",
		plaincode: "02840"
	},
	{
		unicode: "ð",
		plaincode: "02841"
	},
	{
		unicode: "ð",
		plaincode: "02842"
	},
	{
		unicode: "ð",
		plaincode: "02843"
	},
	{
		unicode: "ð",
		plaincode: "02844"
	},
	{
		unicode: "ð",
		plaincode: "02845"
	},
	{
		unicode: "ðĒ",
		plaincode: "02846"
	},
	{
		unicode: "ðĢ",
		plaincode: "02847"
	},
	{
		unicode: "ðŊ",
		plaincode: "02848"
	},
	{
		unicode: "ð",
		plaincode: "02849"
	},
	{
		unicode: "ð",
		plaincode: "02850"
	},
	{
		unicode: "ðž",
		plaincode: "02851"
	},
	{
		unicode: "ðĩ",
		plaincode: "02852"
	},
	{
		unicode: "ðķ",
		plaincode: "02853"
	},
	{
		unicode: "ðĪ",
		plaincode: "02854"
	},
	{
		unicode: "ð§",
		plaincode: "02855"
	},
	{
		unicode: "ðŧ",
		plaincode: "02856"
	},
	{
		unicode: "ð·",
		plaincode: "02857"
	},
	{
		unicode: "ðŠ",
		plaincode: "02858"
	},
	{
		unicode: "ðļ",
		plaincode: "02859"
	},
	{
		unicode: "ðđ",
		plaincode: "02860"
	},
	{
		unicode: "ðš",
		plaincode: "02861"
	},
	{
		unicode: "ðŧ",
		plaincode: "02862"
	},
	{
		unicode: "ðŠ",
		plaincode: "02863"
	},
	{
		unicode: "ðĨ",
		plaincode: "02864"
	},
	{
		unicode: "ðŠ",
		plaincode: "02865"
	},
	{
		unicode: "ðą",
		plaincode: "02866"
	},
	{
		unicode: "ðē",
		plaincode: "02867"
	},
	{
		unicode: "ð",
		plaincode: "02868"
	},
	{
		unicode: "ð",
		plaincode: "02869"
	},
	{
		unicode: "ð ",
		plaincode: "02870"
	},
	{
		unicode: "ð",
		plaincode: "02871"
	},
	{
		unicode: "ðŠŦ",
		plaincode: "02872"
	},
	{
		unicode: "ð",
		plaincode: "02873"
	},
	{
		unicode: "ðŧ",
		plaincode: "02874"
	},
	{
		unicode: "ð―",
		plaincode: "02875"
	},
	{
		unicode: "ðū",
		plaincode: "02876"
	},
	{
		unicode: "ðŋ",
		plaincode: "02877"
	},
	{
		unicode: "ð",
		plaincode: "02878"
	},
	{
		unicode: "ð§Ū",
		plaincode: "02879"
	},
	{
		unicode: "ðĨ",
		plaincode: "02880"
	},
	{
		unicode: "ðŽ",
		plaincode: "02881"
	},
	{
		unicode: "ðš",
		plaincode: "02882"
	},
	{
		unicode: "ð·",
		plaincode: "02883"
	},
	{
		unicode: "ðļ",
		plaincode: "02884"
	},
	{
		unicode: "ðđ",
		plaincode: "02885"
	},
	{
		unicode: "ðž",
		plaincode: "02886"
	},
	{
		unicode: "ð",
		plaincode: "02887"
	},
	{
		unicode: "ð",
		plaincode: "02888"
	},
	{
		unicode: "ðĄ",
		plaincode: "02889"
	},
	{
		unicode: "ðĶ",
		plaincode: "02890"
	},
	{
		unicode: "ðŪ",
		plaincode: "02891"
	},
	{
		unicode: "ðŠ",
		plaincode: "02892"
	},
	{
		unicode: "ð",
		plaincode: "02893"
	},
	{
		unicode: "ð",
		plaincode: "02894"
	},
	{
		unicode: "ð",
		plaincode: "02895"
	},
	{
		unicode: "ð",
		plaincode: "02896"
	},
	{
		unicode: "ð",
		plaincode: "02897"
	},
	{
		unicode: "ð",
		plaincode: "02898"
	},
	{
		unicode: "ð",
		plaincode: "02899"
	},
	{
		unicode: "ð",
		plaincode: "02900"
	},
	{
		unicode: "ð",
		plaincode: "02901"
	},
	{
		unicode: "ð",
		plaincode: "02902"
	},
	{
		unicode: "ð",
		plaincode: "02903"
	},
	{
		unicode: "ð",
		plaincode: "02904"
	},
	{
		unicode: "ð°",
		plaincode: "02905"
	},
	{
		unicode: "ð",
		plaincode: "02906"
	},
	{
		unicode: "ð",
		plaincode: "02907"
	},
	{
		unicode: "ð°",
		plaincode: "02908"
	},
	{
		unicode: "ðŠ",
		plaincode: "02909"
	},
	{
		unicode: "ðī",
		plaincode: "02910"
	},
	{
		unicode: "ðĩ",
		plaincode: "02911"
	},
	{
		unicode: "ðķ",
		plaincode: "02912"
	},
	{
		unicode: "ð·",
		plaincode: "02913"
	},
	{
		unicode: "ðļ",
		plaincode: "02914"
	},
	{
		unicode: "ðģ",
		plaincode: "02915"
	},
	{
		unicode: "ð§ū",
		plaincode: "02916"
	},
	{
		unicode: "ðđ",
		plaincode: "02917"
	},
	{
		unicode: "ð§",
		plaincode: "02918"
	},
	{
		unicode: "ðĻ",
		plaincode: "02919"
	},
	{
		unicode: "ðĐ",
		plaincode: "02920"
	},
	{
		unicode: "ðĪ",
		plaincode: "02921"
	},
	{
		unicode: "ðĨ",
		plaincode: "02922"
	},
	{
		unicode: "ðĶ",
		plaincode: "02923"
	},
	{
		unicode: "ðŦ",
		plaincode: "02924"
	},
	{
		unicode: "ðŠ",
		plaincode: "02925"
	},
	{
		unicode: "ðŽ",
		plaincode: "02926"
	},
	{
		unicode: "ð­",
		plaincode: "02927"
	},
	{
		unicode: "ðŪ",
		plaincode: "02928"
	},
	{
		unicode: "ð",
		plaincode: "02929"
	},
	{
		unicode: "ðž",
		plaincode: "02930"
	},
	{
		unicode: "ð",
		plaincode: "02931"
	},
	{
		unicode: "ð",
		plaincode: "02932"
	},
	{
		unicode: "ð",
		plaincode: "02933"
	},
	{
		unicode: "ð",
		plaincode: "02934"
	},
	{
		unicode: "ð",
		plaincode: "02935"
	},
	{
		unicode: "ð",
		plaincode: "02936"
	},
	{
		unicode: "ð",
		plaincode: "02937"
	},
	{
		unicode: "ð",
		plaincode: "02938"
	},
	{
		unicode: "ð",
		plaincode: "02939"
	},
	{
		unicode: "ð",
		plaincode: "02940"
	},
	{
		unicode: "ð",
		plaincode: "02941"
	},
	{
		unicode: "ð",
		plaincode: "02942"
	},
	{
		unicode: "ð",
		plaincode: "02943"
	},
	{
		unicode: "ð",
		plaincode: "02944"
	},
	{
		unicode: "ð",
		plaincode: "02945"
	},
	{
		unicode: "ð",
		plaincode: "02946"
	},
	{
		unicode: "ð",
		plaincode: "02947"
	},
	{
		unicode: "ð",
		plaincode: "02948"
	},
	{
		unicode: "ð",
		plaincode: "02949"
	},
	{
		unicode: "ðĻ",
		plaincode: "02950"
	},
	{
		unicode: "ðŠ",
		plaincode: "02951"
	},
	{
		unicode: "ðŦ",
		plaincode: "02952"
	},
	{
		unicode: "ðŠ",
		plaincode: "02953"
	},
	{
		unicode: "ðđ",
		plaincode: "02954"
	},
	{
		unicode: "ðŠ",
		plaincode: "02955"
	},
	{
		unicode: "ð§",
		plaincode: "02956"
	},
	{
		unicode: "ðŠ",
		plaincode: "02957"
	},
	{
		unicode: "ðĐ",
		plaincode: "02958"
	},
	{
		unicode: "ðĶŊ",
		plaincode: "02959"
	},
	{
		unicode: "ð",
		plaincode: "02960"
	},
	{
		unicode: "ðŠ",
		plaincode: "02961"
	},
	{
		unicode: "ð§°",
		plaincode: "02962"
	},
	{
		unicode: "ð§ē",
		plaincode: "02963"
	},
	{
		unicode: "ðŠ",
		plaincode: "02964"
	},
	{
		unicode: "ð§Š",
		plaincode: "02965"
	},
	{
		unicode: "ð§Ŧ",
		plaincode: "02966"
	},
	{
		unicode: "ð§Ž",
		plaincode: "02967"
	},
	{
		unicode: "ðŽ",
		plaincode: "02968"
	},
	{
		unicode: "ð­",
		plaincode: "02969"
	},
	{
		unicode: "ðĄ",
		plaincode: "02970"
	},
	{
		unicode: "ð",
		plaincode: "02971"
	},
	{
		unicode: "ðĐļ",
		plaincode: "02972"
	},
	{
		unicode: "ð",
		plaincode: "02973"
	},
	{
		unicode: "ðĐđ",
		plaincode: "02974"
	},
	{
		unicode: "ðĐž",
		plaincode: "02975"
	},
	{
		unicode: "ðĐš",
		plaincode: "02976"
	},
	{
		unicode: "ðĐŧ",
		plaincode: "02977"
	},
	{
		unicode: "ðŠ",
		plaincode: "02978"
	},
	{
		unicode: "ð",
		plaincode: "02979"
	},
	{
		unicode: "ðŠ",
		plaincode: "02980"
	},
	{
		unicode: "ðŠ",
		plaincode: "02981"
	},
	{
		unicode: "ðŠ",
		plaincode: "02982"
	},
	{
		unicode: "ð―",
		plaincode: "02983"
	},
	{
		unicode: "ðŠ ",
		plaincode: "02984"
	},
	{
		unicode: "ðŋ",
		plaincode: "02985"
	},
	{
		unicode: "ð",
		plaincode: "02986"
	},
	{
		unicode: "ðŠĪ",
		plaincode: "02987"
	},
	{
		unicode: "ðŠ",
		plaincode: "02988"
	},
	{
		unicode: "ð§ī",
		plaincode: "02989"
	},
	{
		unicode: "ð§·",
		plaincode: "02990"
	},
	{
		unicode: "ð§đ",
		plaincode: "02991"
	},
	{
		unicode: "ð§š",
		plaincode: "02992"
	},
	{
		unicode: "ð§ŧ",
		plaincode: "02993"
	},
	{
		unicode: "ðŠĢ",
		plaincode: "02994"
	},
	{
		unicode: "ð§ž",
		plaincode: "02995"
	},
	{
		unicode: "ðŦ§",
		plaincode: "02996"
	},
	{
		unicode: "ðŠĨ",
		plaincode: "02997"
	},
	{
		unicode: "ð§―",
		plaincode: "02998"
	},
	{
		unicode: "ð§Ŋ",
		plaincode: "02999"
	},
	{
		unicode: "ð",
		plaincode: "03000"
	},
	{
		unicode: "ðŽ",
		plaincode: "03001"
	},
	{
		unicode: "ðŠĶ",
		plaincode: "03002"
	},
	{
		unicode: "ðŋ",
		plaincode: "03003"
	},
	{
		unicode: "ðŠ§",
		plaincode: "03004"
	},
	{
		unicode: "ðŠŠ",
		plaincode: "03005"
	},
	{
		unicode: "ð§",
		plaincode: "03006"
	},
	{
		unicode: "ðŪ",
		plaincode: "03007"
	},
	{
		unicode: "ð°",
		plaincode: "03008"
	},
	{
		unicode: "âŋ",
		plaincode: "03009"
	},
	{
		unicode: "ðđ",
		plaincode: "03010"
	},
	{
		unicode: "ðš",
		plaincode: "03011"
	},
	{
		unicode: "ðŧ",
		plaincode: "03012"
	},
	{
		unicode: "ðž",
		plaincode: "03013"
	},
	{
		unicode: "ðū",
		plaincode: "03014"
	},
	{
		unicode: "ð",
		plaincode: "03015"
	},
	{
		unicode: "ð",
		plaincode: "03016"
	},
	{
		unicode: "ð",
		plaincode: "03017"
	},
	{
		unicode: "ð",
		plaincode: "03018"
	},
	{
		unicode: "ðļ",
		plaincode: "03019"
	},
	{
		unicode: "â",
		plaincode: "03020"
	},
	{
		unicode: "ðŦ",
		plaincode: "03021"
	},
	{
		unicode: "ðģ",
		plaincode: "03022"
	},
	{
		unicode: "ð­",
		plaincode: "03023"
	},
	{
		unicode: "ðŊ",
		plaincode: "03024"
	},
	{
		unicode: "ðą",
		plaincode: "03025"
	},
	{
		unicode: "ð·",
		plaincode: "03026"
	},
	{
		unicode: "ðĩ",
		plaincode: "03027"
	},
	{
		unicode: "ð",
		plaincode: "03028"
	},
	{
		unicode: "ð",
		plaincode: "03029"
	},
	{
		unicode: "ð",
		plaincode: "03030"
	},
	{
		unicode: "ð",
		plaincode: "03031"
	},
	{
		unicode: "ð",
		plaincode: "03032"
	},
	{
		unicode: "ð",
		plaincode: "03033"
	},
	{
		unicode: "ð",
		plaincode: "03034"
	},
	{
		unicode: "ð",
		plaincode: "03035"
	},
	{
		unicode: "ð",
		plaincode: "03036"
	},
	{
		unicode: "ð",
		plaincode: "03037"
	},
	{
		unicode: "ðŊ",
		plaincode: "03038"
	},
	{
		unicode: "â",
		plaincode: "03039"
	},
	{
		unicode: "â",
		plaincode: "03040"
	},
	{
		unicode: "â",
		plaincode: "03041"
	},
	{
		unicode: "â",
		plaincode: "03042"
	},
	{
		unicode: "â",
		plaincode: "03043"
	},
	{
		unicode: "â",
		plaincode: "03044"
	},
	{
		unicode: "â",
		plaincode: "03045"
	},
	{
		unicode: "â",
		plaincode: "03046"
	},
	{
		unicode: "â",
		plaincode: "03047"
	},
	{
		unicode: "â",
		plaincode: "03048"
	},
	{
		unicode: "â",
		plaincode: "03049"
	},
	{
		unicode: "â",
		plaincode: "03050"
	},
	{
		unicode: "â",
		plaincode: "03051"
	},
	{
		unicode: "ð",
		plaincode: "03052"
	},
	{
		unicode: "ð",
		plaincode: "03053"
	},
	{
		unicode: "ð",
		plaincode: "03054"
	},
	{
		unicode: "âĐ",
		plaincode: "03055"
	},
	{
		unicode: "âŠ",
		plaincode: "03056"
	},
	{
		unicode: "ðž",
		plaincode: "03057"
	},
	{
		unicode: "âŦ",
		plaincode: "03058"
	},
	{
		unicode: "ð―",
		plaincode: "03059"
	},
	{
		unicode: "âŽ",
		plaincode: "03060"
	},
	{
		unicode: "ðĶ",
		plaincode: "03061"
	},
	{
		unicode: "ð",
		plaincode: "03062"
	},
	{
		unicode: "ð",
		plaincode: "03063"
	},
	{
		unicode: "ðķ",
		plaincode: "03064"
	},
	{
		unicode: "ðģ",
		plaincode: "03065"
	},
	{
		unicode: "ðī",
		plaincode: "03066"
	},
	{
		unicode: "â",
		plaincode: "03067"
	},
	{
		unicode: "â",
		plaincode: "03068"
	},
	{
		unicode: "â",
		plaincode: "03069"
	},
	{
		unicode: "ð°",
		plaincode: "03070"
	},
	{
		unicode: "â",
		plaincode: "03071"
	},
	{
		unicode: "â",
		plaincode: "03072"
	},
	{
		unicode: "â",
		plaincode: "03073"
	},
	{
		unicode: "â",
		plaincode: "03074"
	},
	{
		unicode: "ðą",
		plaincode: "03075"
	},
	{
		unicode: "ðē",
		plaincode: "03076"
	},
	{
		unicode: "ðą",
		plaincode: "03077"
	},
	{
		unicode: "ð",
		plaincode: "03078"
	},
	{
		unicode: "ð°",
		plaincode: "03079"
	},
	{
		unicode: "â­",
		plaincode: "03080"
	},
	{
		unicode: "â",
		plaincode: "03081"
	},
	{
		unicode: "â",
		plaincode: "03082"
	},
	{
		unicode: "â",
		plaincode: "03083"
	},
	{
		unicode: "â°",
		plaincode: "03084"
	},
	{
		unicode: "âŋ",
		plaincode: "03085"
	},
	{
		unicode: "#ïļâĢ",
		plaincode: "03086"
	},
	{
		unicode: "*ïļâĢ",
		plaincode: "03087"
	},
	{
		unicode: "0ïļâĢ",
		plaincode: "03088"
	},
	{
		unicode: "1ïļâĢ",
		plaincode: "03089"
	},
	{
		unicode: "2ïļâĢ",
		plaincode: "03090"
	},
	{
		unicode: "3ïļâĢ",
		plaincode: "03091"
	},
	{
		unicode: "4ïļâĢ",
		plaincode: "03092"
	},
	{
		unicode: "5ïļâĢ",
		plaincode: "03093"
	},
	{
		unicode: "6ïļâĢ",
		plaincode: "03094"
	},
	{
		unicode: "7ïļâĢ",
		plaincode: "03095"
	},
	{
		unicode: "8ïļâĢ",
		plaincode: "03096"
	},
	{
		unicode: "9ïļâĢ",
		plaincode: "03097"
	},
	{
		unicode: "ð",
		plaincode: "03098"
	},
	{
		unicode: "ð ",
		plaincode: "03099"
	},
	{
		unicode: "ðĄ",
		plaincode: "03100"
	},
	{
		unicode: "ðĒ",
		plaincode: "03101"
	},
	{
		unicode: "ðĢ",
		plaincode: "03102"
	},
	{
		unicode: "ðĪ",
		plaincode: "03103"
	},
	{
		unicode: "ð",
		plaincode: "03104"
	},
	{
		unicode: "ð",
		plaincode: "03105"
	},
	{
		unicode: "ð",
		plaincode: "03106"
	},
	{
		unicode: "ð",
		plaincode: "03107"
	},
	{
		unicode: "ð",
		plaincode: "03108"
	},
	{
		unicode: "ð",
		plaincode: "03109"
	},
	{
		unicode: "ð",
		plaincode: "03110"
	},
	{
		unicode: "ð",
		plaincode: "03111"
	},
	{
		unicode: "ð",
		plaincode: "03112"
	},
	{
		unicode: "ð",
		plaincode: "03113"
	},
	{
		unicode: "ð",
		plaincode: "03114"
	},
	{
		unicode: "ð",
		plaincode: "03115"
	},
	{
		unicode: "ðķ",
		plaincode: "03116"
	},
	{
		unicode: "ðŊ",
		plaincode: "03117"
	},
	{
		unicode: "ð",
		plaincode: "03118"
	},
	{
		unicode: "ðđ",
		plaincode: "03119"
	},
	{
		unicode: "ð",
		plaincode: "03120"
	},
	{
		unicode: "ðē",
		plaincode: "03121"
	},
	{
		unicode: "ð",
		plaincode: "03122"
	},
	{
		unicode: "ðļ",
		plaincode: "03123"
	},
	{
		unicode: "ðī",
		plaincode: "03124"
	},
	{
		unicode: "ðģ",
		plaincode: "03125"
	},
	{
		unicode: "ðš",
		plaincode: "03126"
	},
	{
		unicode: "ðĩ",
		plaincode: "03127"
	},
	{
		unicode: "ðī",
		plaincode: "03128"
	},
	{
		unicode: "ð ",
		plaincode: "03129"
	},
	{
		unicode: "ðĄ",
		plaincode: "03130"
	},
	{
		unicode: "ðĒ",
		plaincode: "03131"
	},
	{
		unicode: "ðĩ",
		plaincode: "03132"
	},
	{
		unicode: "ðĢ",
		plaincode: "03133"
	},
	{
		unicode: "ðĪ",
		plaincode: "03134"
	},
	{
		unicode: "âŦ",
		plaincode: "03135"
	},
	{
		unicode: "âŠ",
		plaincode: "03136"
	},
	{
		unicode: "ðĨ",
		plaincode: "03137"
	},
	{
		unicode: "ð§",
		plaincode: "03138"
	},
	{
		unicode: "ðĻ",
		plaincode: "03139"
	},
	{
		unicode: "ðĐ",
		plaincode: "03140"
	},
	{
		unicode: "ðĶ",
		plaincode: "03141"
	},
	{
		unicode: "ðŠ",
		plaincode: "03142"
	},
	{
		unicode: "ðŦ",
		plaincode: "03143"
	},
	{
		unicode: "âŽ",
		plaincode: "03144"
	},
	{
		unicode: "âŽ",
		plaincode: "03145"
	},
	{
		unicode: "âū",
		plaincode: "03146"
	},
	{
		unicode: "â―",
		plaincode: "03147"
	},
	{
		unicode: "ðķ",
		plaincode: "03148"
	},
	{
		unicode: "ð·",
		plaincode: "03149"
	},
	{
		unicode: "ðļ",
		plaincode: "03150"
	},
	{
		unicode: "ðđ",
		plaincode: "03151"
	},
	{
		unicode: "ðš",
		plaincode: "03152"
	},
	{
		unicode: "ðŧ",
		plaincode: "03153"
	},
	{
		unicode: "ð ",
		plaincode: "03154"
	},
	{
		unicode: "ð",
		plaincode: "03155"
	},
	{
		unicode: "ðģ",
		plaincode: "03156"
	},
	{
		unicode: "ðē",
		plaincode: "03157"
	},
	{
		unicode: "ð",
		plaincode: "03158"
	},
	{
		unicode: "ðĐ",
		plaincode: "03159"
	},
	{
		unicode: "ð",
		plaincode: "03160"
	},
	{
		unicode: "ðī",
		plaincode: "03161"
	},
	{
		unicode: "ðģïļâð",
		plaincode: "03162"
	},
	{
		unicode: "ðģïļââ§ïļ",
		plaincode: "03163"
	},
	{
		unicode: "ðīââ ïļ",
		plaincode: "03164"
	},
	{
		unicode: "ðĶðĻ",
		plaincode: "03165"
	},
	{
		unicode: "ðĶðĐ",
		plaincode: "03166"
	},
	{
		unicode: "ðĶðŠ",
		plaincode: "03167"
	},
	{
		unicode: "ðĶðŦ",
		plaincode: "03168"
	},
	{
		unicode: "ðĶðŽ",
		plaincode: "03169"
	},
	{
		unicode: "ðĶðŪ",
		plaincode: "03170"
	},
	{
		unicode: "ðĶðą",
		plaincode: "03171"
	},
	{
		unicode: "ðĶðē",
		plaincode: "03172"
	},
	{
		unicode: "ðĶðī",
		plaincode: "03173"
	},
	{
		unicode: "ðĶðķ",
		plaincode: "03174"
	},
	{
		unicode: "ðĶð·",
		plaincode: "03175"
	},
	{
		unicode: "ðĶðļ",
		plaincode: "03176"
	},
	{
		unicode: "ðĶðđ",
		plaincode: "03177"
	},
	{
		unicode: "ðĶðš",
		plaincode: "03178"
	},
	{
		unicode: "ðĶðž",
		plaincode: "03179"
	},
	{
		unicode: "ðĶð―",
		plaincode: "03180"
	},
	{
		unicode: "ðĶðŋ",
		plaincode: "03181"
	},
	{
		unicode: "ð§ðĶ",
		plaincode: "03182"
	},
	{
		unicode: "ð§ð§",
		plaincode: "03183"
	},
	{
		unicode: "ð§ðĐ",
		plaincode: "03184"
	},
	{
		unicode: "ð§ðŠ",
		plaincode: "03185"
	},
	{
		unicode: "ð§ðŦ",
		plaincode: "03186"
	},
	{
		unicode: "ð§ðŽ",
		plaincode: "03187"
	},
	{
		unicode: "ð§ð­",
		plaincode: "03188"
	},
	{
		unicode: "ð§ðŪ",
		plaincode: "03189"
	},
	{
		unicode: "ð§ðŊ",
		plaincode: "03190"
	},
	{
		unicode: "ð§ðą",
		plaincode: "03191"
	},
	{
		unicode: "ð§ðē",
		plaincode: "03192"
	},
	{
		unicode: "ð§ðģ",
		plaincode: "03193"
	},
	{
		unicode: "ð§ðī",
		plaincode: "03194"
	},
	{
		unicode: "ð§ðķ",
		plaincode: "03195"
	},
	{
		unicode: "ð§ð·",
		plaincode: "03196"
	},
	{
		unicode: "ð§ðļ",
		plaincode: "03197"
	},
	{
		unicode: "ð§ðđ",
		plaincode: "03198"
	},
	{
		unicode: "ð§ðŧ",
		plaincode: "03199"
	},
	{
		unicode: "ð§ðž",
		plaincode: "03200"
	},
	{
		unicode: "ð§ðū",
		plaincode: "03201"
	},
	{
		unicode: "ð§ðŋ",
		plaincode: "03202"
	},
	{
		unicode: "ðĻðĶ",
		plaincode: "03203"
	},
	{
		unicode: "ðĻðĻ",
		plaincode: "03204"
	},
	{
		unicode: "ðĻðĐ",
		plaincode: "03205"
	},
	{
		unicode: "ðĻðŦ",
		plaincode: "03206"
	},
	{
		unicode: "ðĻðŽ",
		plaincode: "03207"
	},
	{
		unicode: "ðĻð­",
		plaincode: "03208"
	},
	{
		unicode: "ðĻðŪ",
		plaincode: "03209"
	},
	{
		unicode: "ðĻð°",
		plaincode: "03210"
	},
	{
		unicode: "ðĻðą",
		plaincode: "03211"
	},
	{
		unicode: "ðĻðē",
		plaincode: "03212"
	},
	{
		unicode: "ðĻðģ",
		plaincode: "03213"
	},
	{
		unicode: "ðĻðī",
		plaincode: "03214"
	},
	{
		unicode: "ðĻðĩ",
		plaincode: "03215"
	},
	{
		unicode: "ðĻð·",
		plaincode: "03216"
	},
	{
		unicode: "ðĻðš",
		plaincode: "03217"
	},
	{
		unicode: "ðĻðŧ",
		plaincode: "03218"
	},
	{
		unicode: "ðĻðž",
		plaincode: "03219"
	},
	{
		unicode: "ðĻð―",
		plaincode: "03220"
	},
	{
		unicode: "ðĻðū",
		plaincode: "03221"
	},
	{
		unicode: "ðĻðŋ",
		plaincode: "03222"
	},
	{
		unicode: "ðĐðŠ",
		plaincode: "03223"
	},
	{
		unicode: "ðĐðŽ",
		plaincode: "03224"
	},
	{
		unicode: "ðĐðŊ",
		plaincode: "03225"
	},
	{
		unicode: "ðĐð°",
		plaincode: "03226"
	},
	{
		unicode: "ðĐðē",
		plaincode: "03227"
	},
	{
		unicode: "ðĐðī",
		plaincode: "03228"
	},
	{
		unicode: "ðĐðŋ",
		plaincode: "03229"
	},
	{
		unicode: "ðŠðĶ",
		plaincode: "03230"
	},
	{
		unicode: "ðŠðĻ",
		plaincode: "03231"
	},
	{
		unicode: "ðŠðŠ",
		plaincode: "03232"
	},
	{
		unicode: "ðŠðŽ",
		plaincode: "03233"
	},
	{
		unicode: "ðŠð­",
		plaincode: "03234"
	},
	{
		unicode: "ðŠð·",
		plaincode: "03235"
	},
	{
		unicode: "ðŠðļ",
		plaincode: "03236"
	},
	{
		unicode: "ðŠðđ",
		plaincode: "03237"
	},
	{
		unicode: "ðŠðš",
		plaincode: "03238"
	},
	{
		unicode: "ðŦðŪ",
		plaincode: "03239"
	},
	{
		unicode: "ðŦðŊ",
		plaincode: "03240"
	},
	{
		unicode: "ðŦð°",
		plaincode: "03241"
	},
	{
		unicode: "ðŦðē",
		plaincode: "03242"
	},
	{
		unicode: "ðŦðī",
		plaincode: "03243"
	},
	{
		unicode: "ðŦð·",
		plaincode: "03244"
	},
	{
		unicode: "ðŽðĶ",
		plaincode: "03245"
	},
	{
		unicode: "ðŽð§",
		plaincode: "03246"
	},
	{
		unicode: "ðŽðĐ",
		plaincode: "03247"
	},
	{
		unicode: "ðŽðŠ",
		plaincode: "03248"
	},
	{
		unicode: "ðŽðŦ",
		plaincode: "03249"
	},
	{
		unicode: "ðŽðŽ",
		plaincode: "03250"
	},
	{
		unicode: "ðŽð­",
		plaincode: "03251"
	},
	{
		unicode: "ðŽðŪ",
		plaincode: "03252"
	},
	{
		unicode: "ðŽðą",
		plaincode: "03253"
	},
	{
		unicode: "ðŽðē",
		plaincode: "03254"
	},
	{
		unicode: "ðŽðģ",
		plaincode: "03255"
	},
	{
		unicode: "ðŽðĩ",
		plaincode: "03256"
	},
	{
		unicode: "ðŽðķ",
		plaincode: "03257"
	},
	{
		unicode: "ðŽð·",
		plaincode: "03258"
	},
	{
		unicode: "ðŽðļ",
		plaincode: "03259"
	},
	{
		unicode: "ðŽðđ",
		plaincode: "03260"
	},
	{
		unicode: "ðŽðš",
		plaincode: "03261"
	},
	{
		unicode: "ðŽðž",
		plaincode: "03262"
	},
	{
		unicode: "ðŽðū",
		plaincode: "03263"
	},
	{
		unicode: "ð­ð°",
		plaincode: "03264"
	},
	{
		unicode: "ð­ðē",
		plaincode: "03265"
	},
	{
		unicode: "ð­ðģ",
		plaincode: "03266"
	},
	{
		unicode: "ð­ð·",
		plaincode: "03267"
	},
	{
		unicode: "ð­ðđ",
		plaincode: "03268"
	},
	{
		unicode: "ð­ðš",
		plaincode: "03269"
	},
	{
		unicode: "ðŪðĻ",
		plaincode: "03270"
	},
	{
		unicode: "ðŪðĐ",
		plaincode: "03271"
	},
	{
		unicode: "ðŪðŠ",
		plaincode: "03272"
	},
	{
		unicode: "ðŪðą",
		plaincode: "03273"
	},
	{
		unicode: "ðŪðē",
		plaincode: "03274"
	},
	{
		unicode: "ðŪðģ",
		plaincode: "03275"
	},
	{
		unicode: "ðŪðī",
		plaincode: "03276"
	},
	{
		unicode: "ðŪðķ",
		plaincode: "03277"
	},
	{
		unicode: "ðŪð·",
		plaincode: "03278"
	},
	{
		unicode: "ðŪðļ",
		plaincode: "03279"
	},
	{
		unicode: "ðŪðđ",
		plaincode: "03280"
	},
	{
		unicode: "ðŊðŠ",
		plaincode: "03281"
	},
	{
		unicode: "ðŊðē",
		plaincode: "03282"
	},
	{
		unicode: "ðŊðī",
		plaincode: "03283"
	},
	{
		unicode: "ðŊðĩ",
		plaincode: "03284"
	},
	{
		unicode: "ð°ðŠ",
		plaincode: "03285"
	},
	{
		unicode: "ð°ðŽ",
		plaincode: "03286"
	},
	{
		unicode: "ð°ð­",
		plaincode: "03287"
	},
	{
		unicode: "ð°ðŪ",
		plaincode: "03288"
	},
	{
		unicode: "ð°ðē",
		plaincode: "03289"
	},
	{
		unicode: "ð°ðģ",
		plaincode: "03290"
	},
	{
		unicode: "ð°ðĩ",
		plaincode: "03291"
	},
	{
		unicode: "ð°ð·",
		plaincode: "03292"
	},
	{
		unicode: "ð°ðž",
		plaincode: "03293"
	},
	{
		unicode: "ð°ðū",
		plaincode: "03294"
	},
	{
		unicode: "ð°ðŋ",
		plaincode: "03295"
	},
	{
		unicode: "ðąðĶ",
		plaincode: "03296"
	},
	{
		unicode: "ðąð§",
		plaincode: "03297"
	},
	{
		unicode: "ðąðĻ",
		plaincode: "03298"
	},
	{
		unicode: "ðąðŪ",
		plaincode: "03299"
	},
	{
		unicode: "ðąð°",
		plaincode: "03300"
	},
	{
		unicode: "ðąð·",
		plaincode: "03301"
	},
	{
		unicode: "ðąðļ",
		plaincode: "03302"
	},
	{
		unicode: "ðąðđ",
		plaincode: "03303"
	},
	{
		unicode: "ðąðš",
		plaincode: "03304"
	},
	{
		unicode: "ðąðŧ",
		plaincode: "03305"
	},
	{
		unicode: "ðąðū",
		plaincode: "03306"
	},
	{
		unicode: "ðēðĶ",
		plaincode: "03307"
	},
	{
		unicode: "ðēðĻ",
		plaincode: "03308"
	},
	{
		unicode: "ðēðĐ",
		plaincode: "03309"
	},
	{
		unicode: "ðēðŠ",
		plaincode: "03310"
	},
	{
		unicode: "ðēðŦ",
		plaincode: "03311"
	},
	{
		unicode: "ðēðŽ",
		plaincode: "03312"
	},
	{
		unicode: "ðēð­",
		plaincode: "03313"
	},
	{
		unicode: "ðēð°",
		plaincode: "03314"
	},
	{
		unicode: "ðēðą",
		plaincode: "03315"
	},
	{
		unicode: "ðēðē",
		plaincode: "03316"
	},
	{
		unicode: "ðēðģ",
		plaincode: "03317"
	},
	{
		unicode: "ðēðī",
		plaincode: "03318"
	},
	{
		unicode: "ðēðĩ",
		plaincode: "03319"
	},
	{
		unicode: "ðēðķ",
		plaincode: "03320"
	},
	{
		unicode: "ðēð·",
		plaincode: "03321"
	},
	{
		unicode: "ðēðļ",
		plaincode: "03322"
	},
	{
		unicode: "ðēðđ",
		plaincode: "03323"
	},
	{
		unicode: "ðēðš",
		plaincode: "03324"
	},
	{
		unicode: "ðēðŧ",
		plaincode: "03325"
	},
	{
		unicode: "ðēðž",
		plaincode: "03326"
	},
	{
		unicode: "ðēð―",
		plaincode: "03327"
	},
	{
		unicode: "ðēðū",
		plaincode: "03328"
	},
	{
		unicode: "ðēðŋ",
		plaincode: "03329"
	},
	{
		unicode: "ðģðĶ",
		plaincode: "03330"
	},
	{
		unicode: "ðģðĻ",
		plaincode: "03331"
	},
	{
		unicode: "ðģðŠ",
		plaincode: "03332"
	},
	{
		unicode: "ðģðŦ",
		plaincode: "03333"
	},
	{
		unicode: "ðģðŽ",
		plaincode: "03334"
	},
	{
		unicode: "ðģðŪ",
		plaincode: "03335"
	},
	{
		unicode: "ðģðą",
		plaincode: "03336"
	},
	{
		unicode: "ðģðī",
		plaincode: "03337"
	},
	{
		unicode: "ðģðĩ",
		plaincode: "03338"
	},
	{
		unicode: "ðģð·",
		plaincode: "03339"
	},
	{
		unicode: "ðģðš",
		plaincode: "03340"
	},
	{
		unicode: "ðģðŋ",
		plaincode: "03341"
	},
	{
		unicode: "ðīðē",
		plaincode: "03342"
	},
	{
		unicode: "ðĩðĶ",
		plaincode: "03343"
	},
	{
		unicode: "ðĩðŠ",
		plaincode: "03344"
	},
	{
		unicode: "ðĩðŦ",
		plaincode: "03345"
	},
	{
		unicode: "ðĩðŽ",
		plaincode: "03346"
	},
	{
		unicode: "ðĩð­",
		plaincode: "03347"
	},
	{
		unicode: "ðĩð°",
		plaincode: "03348"
	},
	{
		unicode: "ðĩðą",
		plaincode: "03349"
	},
	{
		unicode: "ðĩðē",
		plaincode: "03350"
	},
	{
		unicode: "ðĩðģ",
		plaincode: "03351"
	},
	{
		unicode: "ðĩð·",
		plaincode: "03352"
	},
	{
		unicode: "ðĩðļ",
		plaincode: "03353"
	},
	{
		unicode: "ðĩðđ",
		plaincode: "03354"
	},
	{
		unicode: "ðĩðž",
		plaincode: "03355"
	},
	{
		unicode: "ðĩðū",
		plaincode: "03356"
	},
	{
		unicode: "ðķðĶ",
		plaincode: "03357"
	},
	{
		unicode: "ð·ðŠ",
		plaincode: "03358"
	},
	{
		unicode: "ð·ðī",
		plaincode: "03359"
	},
	{
		unicode: "ð·ðļ",
		plaincode: "03360"
	},
	{
		unicode: "ð·ðš",
		plaincode: "03361"
	},
	{
		unicode: "ð·ðž",
		plaincode: "03362"
	},
	{
		unicode: "ðļðĶ",
		plaincode: "03363"
	},
	{
		unicode: "ðļð§",
		plaincode: "03364"
	},
	{
		unicode: "ðļðĻ",
		plaincode: "03365"
	},
	{
		unicode: "ðļðĐ",
		plaincode: "03366"
	},
	{
		unicode: "ðļðŠ",
		plaincode: "03367"
	},
	{
		unicode: "ðļðŽ",
		plaincode: "03368"
	},
	{
		unicode: "ðļð­",
		plaincode: "03369"
	},
	{
		unicode: "ðļðŪ",
		plaincode: "03370"
	},
	{
		unicode: "ðļðŊ",
		plaincode: "03371"
	},
	{
		unicode: "ðļð°",
		plaincode: "03372"
	},
	{
		unicode: "ðļðą",
		plaincode: "03373"
	},
	{
		unicode: "ðļðē",
		plaincode: "03374"
	},
	{
		unicode: "ðļðģ",
		plaincode: "03375"
	},
	{
		unicode: "ðļðī",
		plaincode: "03376"
	},
	{
		unicode: "ðļð·",
		plaincode: "03377"
	},
	{
		unicode: "ðļðļ",
		plaincode: "03378"
	},
	{
		unicode: "ðļðđ",
		plaincode: "03379"
	},
	{
		unicode: "ðļðŧ",
		plaincode: "03380"
	},
	{
		unicode: "ðļð―",
		plaincode: "03381"
	},
	{
		unicode: "ðļðū",
		plaincode: "03382"
	},
	{
		unicode: "ðļðŋ",
		plaincode: "03383"
	},
	{
		unicode: "ðđðĶ",
		plaincode: "03384"
	},
	{
		unicode: "ðđðĻ",
		plaincode: "03385"
	},
	{
		unicode: "ðđðĐ",
		plaincode: "03386"
	},
	{
		unicode: "ðđðŦ",
		plaincode: "03387"
	},
	{
		unicode: "ðđðŽ",
		plaincode: "03388"
	},
	{
		unicode: "ðđð­",
		plaincode: "03389"
	},
	{
		unicode: "ðđðŊ",
		plaincode: "03390"
	},
	{
		unicode: "ðđð°",
		plaincode: "03391"
	},
	{
		unicode: "ðđðą",
		plaincode: "03392"
	},
	{
		unicode: "ðđðē",
		plaincode: "03393"
	},
	{
		unicode: "ðđðģ",
		plaincode: "03394"
	},
	{
		unicode: "ðđðī",
		plaincode: "03395"
	},
	{
		unicode: "ðđð·",
		plaincode: "03396"
	},
	{
		unicode: "ðđðđ",
		plaincode: "03397"
	},
	{
		unicode: "ðđðŧ",
		plaincode: "03398"
	},
	{
		unicode: "ðđðž",
		plaincode: "03399"
	},
	{
		unicode: "ðđðŋ",
		plaincode: "03400"
	},
	{
		unicode: "ðšðĶ",
		plaincode: "03401"
	},
	{
		unicode: "ðšðŽ",
		plaincode: "03402"
	},
	{
		unicode: "ðšðē",
		plaincode: "03403"
	},
	{
		unicode: "ðšðģ",
		plaincode: "03404"
	},
	{
		unicode: "ðšðļ",
		plaincode: "03405"
	},
	{
		unicode: "ðšðū",
		plaincode: "03406"
	},
	{
		unicode: "ðšðŋ",
		plaincode: "03407"
	},
	{
		unicode: "ðŧðĶ",
		plaincode: "03408"
	},
	{
		unicode: "ðŧðĻ",
		plaincode: "03409"
	},
	{
		unicode: "ðŧðŠ",
		plaincode: "03410"
	},
	{
		unicode: "ðŧðŽ",
		plaincode: "03411"
	},
	{
		unicode: "ðŧðŪ",
		plaincode: "03412"
	},
	{
		unicode: "ðŧðģ",
		plaincode: "03413"
	},
	{
		unicode: "ðŧðš",
		plaincode: "03414"
	},
	{
		unicode: "ðžðŦ",
		plaincode: "03415"
	},
	{
		unicode: "ðžðļ",
		plaincode: "03416"
	},
	{
		unicode: "ð―ð°",
		plaincode: "03417"
	},
	{
		unicode: "ðūðŠ",
		plaincode: "03418"
	},
	{
		unicode: "ðūðđ",
		plaincode: "03419"
	},
	{
		unicode: "ðŋðĶ",
		plaincode: "03420"
	},
	{
		unicode: "ðŋðē",
		plaincode: "03421"
	},
	{
		unicode: "ðŋðž",
		plaincode: "03422"
	},
	{
		unicode: "ðīó §ó Ēó Ĩó Ūó §ó ŋ",
		plaincode: "03423"
	},
	{
		unicode: "ðīó §ó Ēó ģó Ģó īó ŋ",
		plaincode: "03424"
	},
	{
		unicode: "ðīó §ó Ēó ·ó Žó ģó ŋ",
		plaincode: "03425"
	}
];

// to run this file: node --experimental-json-modules codebook-emojis.js
// import * as codebookRaw from './codebook-emojis.json' assert { type: 'json' }
const codebookRaw$1 = require$$0;

codebookEmojis.codebookRaw = codebookRaw$1;

var regexEmojis = {};

const emojiRegex$1 = ['\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])|\uD83E\uDEF1\uD83C\uDFFF\u200D\uD83E\uDEF2)(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])|\uD83E\uDEF1\uD83C\uDFFE\u200D\uD83E\uDEF2)(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])|\uD83E\uDEF1\uD83C\uDFFD\u200D\uD83E\uDEF2)(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])|\uD83E\uDEF1\uD83C\uDFFC\u200D\uD83E\uDEF2)(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])|\uD83E\uDEF1\uD83C\uDFFB\u200D\uD83E\uDEF2)(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDEF1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF6])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF6]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDD-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC2\uDED0-\uDED9\uDEE0-\uDEE7]'];

regexEmojis.emojiRegex = emojiRegex$1;

var conversiontableEng = {};

const eng$2 = {
  plaincodeRegex: '0\\d{4}|[1-5]|(90[0-9]{1})|(6[0-9]{1})|(7[0-9]{1})|(8[0-9]{1})|(9[1-9]{1})',
  textRegex: '[a-z0-9\\s]|[,@#+-/.:!(=?)]',
  table: [
    { unicode: 'a', plaincode: '1' },
    { unicode: 'e', plaincode: '2' },
    { unicode: 'i', plaincode: '3' },
    { unicode: 'n', plaincode: '4' },
    { unicode: 'o', plaincode: '5' },
    { unicode: 't', plaincode: '60' },
    { unicode: 'b', plaincode: '61' },
    { unicode: 'c', plaincode: '62' },
    { unicode: 'd', plaincode: '63' },
    { unicode: 'f', plaincode: '64' },
    { unicode: 'g', plaincode: '65' },
    { unicode: 'h', plaincode: '66' },
    { unicode: 'j', plaincode: '67' },
    { unicode: 'k', plaincode: '68' },
    { unicode: 'l', plaincode: '69' },
    { unicode: 'm', plaincode: '70' },
    { unicode: 'p', plaincode: '71' },
    { unicode: 'q', plaincode: '72' },
    { unicode: 'r', plaincode: '73' },
    { unicode: 's', plaincode: '74' },
    { unicode: 'u', plaincode: '75' },
    { unicode: 'v', plaincode: '76' },
    { unicode: 'w', plaincode: '77' },
    { unicode: 'x', plaincode: '78' },
    { unicode: 'y', plaincode: '79' },
    { unicode: 'z', plaincode: '80' },
    { unicode: ',', plaincode: '84' },
    { unicode: '@', plaincode: '85' },
    { unicode: '#', plaincode: '86' },
    { unicode: '+', plaincode: '87' },
    { unicode: '-', plaincode: '88' },
    { unicode: '/', plaincode: '89' },
    { unicode: '0', plaincode: '900' },
    { unicode: '1', plaincode: '901' },
    { unicode: '2', plaincode: '902' },
    { unicode: '3', plaincode: '903' },
    { unicode: '4', plaincode: '904' },
    { unicode: '5', plaincode: '905' },
    { unicode: '6', plaincode: '906' },
    { unicode: '7', plaincode: '907' },
    { unicode: '8', plaincode: '908' },
    { unicode: '9', plaincode: '909' },
    { unicode: '.', plaincode: '91' },
    { unicode: ':', plaincode: '92' },
    { unicode: '\'', plaincode: '93' },
    { unicode: '!', plaincode: '94' },
    { unicode: '(', plaincode: '95' },
    { unicode: ')', plaincode: '96' },
    { unicode: '=', plaincode: '97' },
    { unicode: '?', plaincode: '98' },
    { unicode: ' ', plaincode: '99' }
  ]
};

conversiontableEng.eng = eng$2;

var conversiontableNob = {};

const nob$2 = {
  plaincodeRegex: '0\\d{4}|[1-5]|(90[0-9]{1})|(6[0-9]{1})|(7[0-9]{1})|(8[0-9]{1})|(9[1-9]{1})',
  textRegex: '[a-zÃĶÃļÃĨ0-9\\s]|[,@#+-/.:!(=?)]',
  table: [
    { unicode: 'e', plaincode: '1' },
    { unicode: 'r', plaincode: '2' },
    { unicode: 't', plaincode: '3' },
    { unicode: 'n', plaincode: '4' },
    { unicode: 's', plaincode: '5' },
    { unicode: 'i', plaincode: '60' },
    { unicode: 'a', plaincode: '61' },
    { unicode: 'l', plaincode: '62' },
    { unicode: 'o', plaincode: '63' },
    { unicode: 'd', plaincode: '64' },
    { unicode: 'g', plaincode: '65' },
    { unicode: 'k', plaincode: '66' },
    { unicode: 'm', plaincode: '67' },
    { unicode: 'v', plaincode: '68' },
    { unicode: 'p', plaincode: '69' },
    { unicode: 'f', plaincode: '70' },
    { unicode: 'u', plaincode: '71' },
    { unicode: 'h', plaincode: '72' },
    { unicode: 'ÃĨ', plaincode: '73' },
    { unicode: 'b', plaincode: '74' },
    { unicode: 'j', plaincode: '75' },
    { unicode: 'Ãļ', plaincode: '76' },
    { unicode: 'y', plaincode: '77' },
    { unicode: 'c', plaincode: '78' },
    { unicode: 'ÃĶ', plaincode: '79' },
    { unicode: 'w', plaincode: '80' },
    { unicode: 'x', plaincode: '81' },
    { unicode: 'z', plaincode: '82' },
    { unicode: 'q', plaincode: '83' },
    { unicode: ',', plaincode: '84' },
    { unicode: '@', plaincode: '85' },
    { unicode: '#', plaincode: '86' },
    { unicode: '+', plaincode: '87' },
    { unicode: '-', plaincode: '88' },
    { unicode: '/', plaincode: '89' },
    { unicode: '0', plaincode: '900' },
    { unicode: '1', plaincode: '901' },
    { unicode: '2', plaincode: '902' },
    { unicode: '3', plaincode: '903' },
    { unicode: '4', plaincode: '904' },
    { unicode: '5', plaincode: '905' },
    { unicode: '6', plaincode: '906' },
    { unicode: '7', plaincode: '907' },
    { unicode: '8', plaincode: '908' },
    { unicode: '9', plaincode: '909' },
    { unicode: '.', plaincode: '91' },
    { unicode: ':', plaincode: '92' },
    { unicode: '\'', plaincode: '93' },
    { unicode: '!', plaincode: '94' },
    { unicode: '(', plaincode: '95' },
    { unicode: ')', plaincode: '96' },
    { unicode: '=', plaincode: '97' },
    { unicode: '?', plaincode: '98' },
    { unicode: ' ', plaincode: '99' }
  ]
};

conversiontableNob.nob = nob$2;

const { createOnetimePad: createOnetimePad$1 } = otpNode;
const { codebookRaw } = codebookEmojis;
const { emojiRegex } = regexEmojis;
const { eng: eng$1 } = conversiontableEng;
const { nob: nob$1 } = conversiontableNob;
const codebook$1 = codebookRaw;

// ### Function: Text to plaincode
function textToPlaincode$1 (text, conversionLanguage, codebook) {
  // Joining regular conversion table and codebook
  conversionLanguage.table = [...conversionLanguage.table, ...codebook];
  text = text.toLowerCase();

  // split into array of characters
  let regex = emojiRegex + '|' + conversionLanguage.textRegex;
  regex = new RegExp(regex, 'g');
  const textArr = text.match(regex);

  // convert text to plaincode
  const plaincode = textArr.map((character) => {
    const letterObj = conversionLanguage.table.find(obj => obj.unicode === character);
    try {
      return letterObj.plaincode
    } catch (error) {
      return ' '
    }
  });
  return plaincode.join('')
}

// ### Function: Plaincode to text
function plaincodeToText$1 (plaincode, conversionLanguage, codebook) {
  // Joining regular conversion table and codebook
  conversionLanguage.table = [...conversionLanguage.table, ...codebook];
  // finding via regex: plaincode enteties in plaincode string
  const regex = new RegExp(conversionLanguage.plaincodeRegex, 'g');
  const plaincodeArr = plaincode.match(regex);

  // convert plaincode to text
  const text = plaincodeArr.map((plaincode) => {
    const letterObj = conversionLanguage.table.find(obj => obj.plaincode === plaincode);
    return letterObj.unicode
  });
  return text.join('')
}

// ### Function: Check one-time pad >= plaincode
function checkLength$1 (plaincode, otp) {
  let tooLong = false;
  const plaincodeLength = plaincode.length;
  const otpLength = otp.length;
  if (plaincodeLength > otpLength) {
    tooLong = true;
  }
  return { plaincodeLength: plaincodeLength, otpLength: otpLength, tooLong: tooLong }
}

// ### Function: Encrypt
function encryptPlaincode$1 (plaincode, otp) {
  // Split string into array
  const plaincodeArr = plaincode.split('');
  const otpArr = otp.split('');

  // Encrypt
  const encryptedMsg = plaincodeArr.map((digit, index) => {
    const encryptedDigit = encryptDecryptDigit(digit, otpArr[index], 'encrypt');
    return encryptedDigit
  });
  return encryptedMsg
}

// ### Function: Decrypt
function decryptEncryptedMsg$1 (encryptedMsg, otp) {
  // Split string into array
  const encryptedMsgArr = encryptedMsg.split('');
  const otpArr = otp.split('');

  // Decrypt
  const decryptedMsg = encryptedMsgArr.map((encryptedDigit, index) => {
    const decryptedDigit = encryptDecryptDigit(encryptedDigit, otpArr[index], 'decrypt');
    return decryptedDigit
  });
  return decryptedMsg
}

// ### Function
function encryptDecryptDigit (digit, otpKey, direction) {
  let encryptedDecrypted;
  if (direction === 'encrypt') {
    encryptedDecrypted = (parseInt(digit, 10) + parseInt(otpKey, 10)) % 10;
  }
  if (direction === 'decrypt') {
    encryptedDecrypted = (digit - otpKey + 10) % 10;
  }
  return encryptedDecrypted
}

otpFunctions.textToPlaincode = textToPlaincode$1;
otpFunctions.plaincodeToText = plaincodeToText$1;
otpFunctions.checkLength = checkLength$1;
otpFunctions.encryptPlaincode = encryptPlaincode$1;
otpFunctions.decryptEncryptedMsg = decryptEncryptedMsg$1;
otpFunctions.eng = eng$1;
otpFunctions.nob = nob$1;
otpFunctions.codebook = codebook$1;
otpFunctions.createOnetimePad = createOnetimePad$1;

const { textToPlaincode, plaincodeToText, eng, nob, codebook, checkLength, encryptPlaincode, decryptEncryptedMsg } = otpFunctions;
const { createOnetimePad } = otpNode;

var createOnetimePad_1 = indexNode.createOnetimePad = createOnetimePad;
var textToPlaincode_1 = indexNode.textToPlaincode = textToPlaincode;
var plaincodeToText_1 = indexNode.plaincodeToText = plaincodeToText;
var eng_1 = indexNode.eng = eng;
var nob_1 = indexNode.nob = nob;
var codebook_1 = indexNode.codebook = codebook;
var checkLength_1 = indexNode.checkLength = checkLength;
var encryptPlaincode_1 = indexNode.encryptPlaincode = encryptPlaincode;
var decryptEncryptedMsg_1 = indexNode.decryptEncryptedMsg = decryptEncryptedMsg;

export { checkLength_1 as checkLength, codebook_1 as codebook, createOnetimePad_1 as createOnetimePad, decryptEncryptedMsg_1 as decryptEncryptedMsg, indexNode as default, encryptPlaincode_1 as encryptPlaincode, eng_1 as eng, nob_1 as nob, plaincodeToText_1 as plaincodeToText, textToPlaincode_1 as textToPlaincode };
