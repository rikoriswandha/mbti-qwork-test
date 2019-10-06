import React, { Component } from 'react'
import Answers from './Answers'
import './QuizPage.css'
import Result from './Result';

class QuizPage extends Component {
  static defaultProps = {
    question : [
      {q1: 'Spontan, Fleksibel, tidak diikat waktu', t1: 'P', q2: 'Terencana dan memiliki deadline jelas', t2: 'J'},
      {q1: 'Lebih memilih berkomunikasi dengan menulis', t1: 'I', q2: 'Lebih memilih berkomunikasi dengan bicara', t2: 'E'},
      {q1: 'Tidak menyukai hal-hal yang bersifat mendadak dan di luar perencanaan', t1: 'J', q2: 'Perubahan mendadak tidak jadi masalah', t2: 'P'},
      {q1: 'Obyektif', t1: 'T', q2: 'Subyektif', t2: 'F'},
      {q1: 'Menemukan dan mengembangkan ide dengan mendiskusikannya', t1: 'E', q2: 'Menemukan dan mengembangkan ide dengan merenungkan', t2: 'I'},
      {q1: 'Bergerak dari gambaran umum lalu ke detail', t1: 'N', q2: 'Bergerak dari detail ke gambaran umum sebagai kesimpulan akhir', t2: 'S'},
      {q1: 'Berorientasi pada dunia eksternal (kegiatan, orang)', t1: 'E', q2: 'Berorientasi pada dunia internal (memori, pemikiran, ide)', t2: 'I'},
      {q1: 'Berbicara mengenai masalah yang dihadapi hari ini dan langkah-langkah praktis mengatasinya', t1: 'S', q2: 'Berbicara mengenai visi masa depan dan konsep-konsep mengenai visi tersebut', t2: 'N'},
      {q1: 'Diyakinkan dengan penjelasan yang menyentuh perasaan', t1: 'F', q2: 'Diyakinkan dengan penjelasan yang masuk akal', t2: 'T'},
      {q1: 'Fokus pada sedikit hobi namun mendalam', t1: 'I', q2: 'Fokus pada banyak hobi secara luas dan umum', t2: 'E'},
      {q1: 'Tertutup dan mandiri', t1: 'I', q2: 'Sosial dan ekspresif', t2: 'E'},
      {q1: 'Aturan, jadwal dan target sangat mengikat dan membebani', t1: 'P', q2: 'Aturan, jadwal dan target akan sangat membantu dan memperjelas tindakan', t2: 'J'},
      {q1: 'Menggunakan pengalaman sebagai pedoman', t1: 'S', q2: 'Menggunakan imajinasi dan perenungan sebagai pedoman', t2: 'N'},
      {q1: 'Berorientasi tugas dan job description', t1: 'T', q2: 'Berorientasi pada manusia dan hubungan', t2: 'F'},
      {q1: 'Pertemuan dengan orang lain dan aktivitas sosial melelahkan', t1: 'I', q2: 'Bertemu orang dan aktivitas sosial membuat bersemangat', t2: 'E'},
      {q1: 'SOP sangat membantu', t1: 'S', q2: 'SOP sangat membosankan', t2: 'N'},
      {q1: 'Mengambil keputusan berdasar logika dan aturan main', t1: 'T', q2: 'Mengambil keputusan berdasar perasaan pribadi dan kondisi orang lain', t2: 'F'},
      {q1: 'Bebas dan dinamis', t1: 'N', q2: 'Prosedural dan tradisional', t2: 'S'},
      {q1: 'Berorientasi pada hasil', t1: 'J', q2: 'Berorientasi pada proses', t2: 'P'},
      {q1: 'Beraktifitas sendirian di rumah menyenangkan', t1: 'I', q2: 'Beraktifitas sendirian di rumah membosankan', t2: 'E'},
      {q1: 'Membiarkan orang lain bertindak bebas asalkan tujuan tercapai', t1: 'P', q2: 'Mengatur orang lain dengan tata tertib agar tujuan tercapai', t2: 'J'},
      {q1: 'Memilih ide inspiratif lebih penting daripada fakta', t1: 'N', q2: 'Memilih fakta lebih penting daripada ide inspiratif', t2: 'S'},
      {q1: 'Mengemukakan tujuan dan sasaran lebih dahulu', t1: 'T', q2: 'Mengemukakan kesepakatan terlebih dahulu', t2: 'F'},
      {q1: 'Fokus pada target dan mengabaikan hal-hal baru', t1: 'J', q2: 'Memperhatikan hal-hal baru dan siap menyesuaikan diri serta mengubah target', t2: 'P'},
      {q1: 'Kontinuitas dan stabilitas lebih diutamakan', t1: 'S', q2: 'Perubahan dan variasi lebih diutamakan', t2: 'N'},
      {q1: 'Pendirian masih bisa berubah tergantung situasi nantinya', t1: 'P', q2: 'Berpegang teguh pada pendirian', t2: 'J'},
      {q1: 'Bertindak step by step dengan timeframe yang jelas', t1: 'S', q2: 'Bertindak dengan semangat tanpa menggunakan timeframe', t2: 'N'},
      {q1: 'Berinisiatif tinggi hampir dalam berbagai hal meskipun tidak berhubungan dengan dirinya', t1: 'E', q2: 'Berinisiatif bila situasi memaksa atau berhubungan dengan kepentingan sendiri', t2: 'I'},
      {q1: 'Lebih memilih tempat yang tenang dan pribadi untuk berkonsentrasi', t1: 'I', q2: 'Lebih memilih tempat yang ramai dan banyak interaksi / aktifitas', t2: 'E'},
      {q1: 'Menganalisa', t1: 'T', q2: 'Berempati', t2: 'F'},
      {q1: 'Berpikir secara matang sebelum bertindak', t1: 'I', q2: 'Berani bertindak tanpa terlalu lama berfikir', t2: 'E'},
      {q1: 'Menghargai seseorang karena sifat dan perilakunya', t1: 'F', q2: 'Menghargai seseorang karena skill dan faktor teknis', t2: 'T'},
      {q1: 'Merasa nyaman bila situasi tetap terbuka terhadap pilihan-pilihan lain', t1: 'P', q2: 'Merasa tenang bila semua sudah diputuskan', t2: 'J'},
      {q1: 'Menarik kesimpulan dengan lama dan hati-hati', t1: 'S', q2: 'Menarik kesimpulan dengan cepat sesuai naluri', t2: 'N'},
      {q1: 'Mengekspresikan semangat', t1: 'E', q2: 'Menyimpan semangat dalam hati', t2: 'I'},
      {q1: 'Mengklarifikasi ide dan teori sebelum dipraktekkan', t1: 'S', q2: 'Memahami ide dan teori saat mempraktekkannya langsung', t2: 'N'},
      {q1: 'Melibatkan perasaan itu tidak profesional', t1: 'T', q2: 'Terlalu kaku pada peraturan dan pekerjaan itu kejam', t2: 'F'},
      {q1: 'Mencari kesempatan untuk berkomunikasi secara perorangan', t1: 'I', q2: 'Memilih berkomunikasi pada sekelompok orang', t2: 'E'},
      {q1: 'Yang penting situasi harmonis terjaga', t1: 'F', q2: 'Yang penting tujuan tercapai', t2: 'T'},
      {q1: 'Ketidakpastian itu seru, menegangkan dan membuat hati lebih senang', t1: 'P', q2: 'Ketidakpastian membuat bingung dan meresahkan', t2: 'J'},
      {q1: 'Berfokus pada masa kini (apa yang bisa diperbaiki sekarang)', t1: 'S', q2: 'Berfokus pada masa depan (apa yang mungkin dicapai di masa depan)', t2: 'N'}, 
      {q1: 'Mempertanyakan', t1: 'T', q2: 'Mengakomodasi', t2: 'F'}, 
      {q1: 'Secara konsisten mengamati dan mengingat detail', t1: 'S', q2: 'Mengamati dan mengingat detail hanya bila berhubungan dengan pola', t2: 'N'}, 
      {q1: 'Situasi last minute membuat bersemangat dan memunculkan potensi', t1: 'P', q2: 'Situasi last minute sangat menyiksa, membuat stress dan merupakan kesalahan', t2: 'J'},
      {q1: 'Lebih suka komunikasi tidak langsung (telp, surat, e-mail)', t1: 'I', q2: 'Lebih suka komunikasi langsung (tatap muka)', t2: 'E'},
      {q1: 'Praktis', t1: 'S', q2: 'Konseptual', t2: 'N'},
      {q1: 'Perubahan adalah musuh', t1: 'J', q2: 'Perubahan adalah semangat hidup', t2: 'P'},
      {q1: 'Sering dianggap keras kepala', t1: 'T', q2: 'Sering dianggap terlalu memihak', t2: 'F'},
      {q1: 'Bersemangat saat menolong orang keluar dari kesalahan dan meluruskan', t1: 'F', q2: 'Bersemangat saat mengkritik dan menemukan kesalahan', t2: 'T'},
      {q1: 'Bertindak sesuai situasi dan kondisi yang terjadi saat itu', t1: 'P', q2: 'Bertindak sesuai apa yang sudah direncanakan', t2: 'J'},
      {q1: 'Menggunakan keterampilan yang sudah dikuasai', t1: 'S', q2: 'Menyukai tantangan untuk menguasai keterampilan baru', t2: 'N'},
      {q1: 'Membangun ide pada saat berbicara', t1: 'E', q2: 'Membangun ide dengan matang baru membicarakannya', t2: 'I'},
      {q1: 'Memilih cara yang sudah ada dan sudah terbukti', t1: 'S', q2: 'Memilih cara yang unik dan belum dipraktekkan orang lain', t2: 'N'},
      {q1: 'Hidup harus sudah diatur dari awal', t1: 'J', q2: 'Hidup seharusnya mengalir sesuai kondisi', t2: 'P'},
      {q1: 'Standar harus ditegakkan di atas segalanya (itu menunjukkan kehormatan dan harga diri)', t1: 'T', q2: 'Perasaan manusia lebih penting dari sekadar standar (yang adalah benda mati)', t2: 'F'},
      {q1: 'Daftar dan checklist adalah panduan penting', t1: 'J', q2: 'Daftar dan checklist adalah tugas dan beban', t2: 'P'},
      {q1: 'Menuntut perlakuan yang adil dan sama pada semua orang', t1: 'T', q2: 'Menuntut perlakuan khusus sesuai karakteristik masing-masing orang', t2: 'F'},
      {q1: 'Mementingkan sebab-akibat', t1: 'T', q2: 'Mementingkan nilai-nilai personal', t2: 'F'},
      {q1: 'Puas ketika mampu beradaptasi dengan momentum yang terjadi', t1: 'P', q2: 'Puas ketika mampu menjalankan semuanya sesuai rencana', t2: 'J'},
      {q1: 'Spontan, Easy Going, fleksibel', t1: 'E', q2: 'Berhati-hati, penuh pertimbangan, kaku', t2: 'I'},
    ],
    maxQuestion: 60,
  }
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: 0,
      answerI: 0,
      answerE: 0,
      answerP: 0,
      answerJ: 0,
      answerT: 0,
      answerF: 0,
      answerN: 0,
      answerS: 0,
      result: [],
    }
    this.nextQuestion = this.nextQuestion.bind(this);
    this.handleChoice = this.handleChoice.bind(this);
    this.pushEAndI = this.pushEAndI.bind(this);
    this.pushPAndJ = this.pushPAndJ.bind(this);
    this.pushTAndF = this.pushTAndF.bind(this);
    this.pushNAndS = this.pushNAndS.bind(this);
  }
  pushEAndI() {
    if (this.state.questionNumber === this.props.maxQuestion-1) {
      if (this.state.answerE >= this.state.answerI) {
        this.setState(st => ({
          result: st.result.concat('E')
        }))
      } else {
        this.setState(st => ({
          result: st.result.concat('I')
        }))
      }
    }
  }
  pushPAndJ() {
    if (this.state.questionNumber === this.props.maxQuestion-1) {
      if (this.state.answerP >= this.state.answerJ) {
        this.setState(st => ({
          result: st.result.concat('P')
        }))
      } else {
        this.setState(st => ({
          result: st.result.concat('J')
        }))
      }
    }
  }
  pushTAndF() {
    if (this.state.questionNumber === this.props.maxQuestion-1) {
      if (this.state.answerT >= this.state.answerF) {
        this.setState(st => ({
          result: st.result.concat('T')
        }))
      } else {
        this.setState(st => ({
          result: st.result.concat('F')
        }))
      }
    }
  }
  pushNAndS() {
    if (this.state.questionNumber === this.props.maxQuestion-1) {
      if (this.state.answerN >= this.state.answerS) {
        this.setState(st => ({
          result: st.result.concat('N')
        }))
      } else {
        this.setState(st => ({
          result: st.result.concat('S')
        }))
      }
    }
  }
  nextQuestion() {
    this.setState(st => ({
      questionNumber: st.questionNumber+1,
    }))
  }
  handleChoice(e) {
    let answer = e.target.value;
    switch (answer) {
      case 'I':
        this.setState(st => ({
          answerI: st.answerI+1,
        }))
        break;
      case 'E':
        this.setState(st => ({
          answerE: st.answerE+1,
        }))
        break
      case 'P':
        this.setState(st => ({
          answerP: st.answerP+1,
        }))
        break
      case 'J':
        this.setState(st => ({
          answerJ: st.answerJ+1,
        }))
        break
      case 'T':
        this.setState(st => ({
          answerT: st.answerT+1,
        }))
        break
      case 'F':
        this.setState(st => ({
          answerF: st.answerF+1,
        }))
        break
      case 'N':
        this.setState(st => ({
          answerN: st.answerN+1,
        }))
        break
      case 'S':
        this.setState(st => ({
          answerS: st.answerS+1,
        }))
        break
      default:
        break;
    }
    this.nextQuestion();
    this.pushEAndI(); 
    this.pushNAndS();  
    this.pushTAndF(); 
    this.pushPAndJ();
  }
  render() {
    return(
      <div className="col-lg-8 offset-lg-2">
        <div className="card">
          <div className="card-header">
            <h1 className="card-title QuizPage-title">MBTI Test</h1>
            {this.state.questionNumber < this.props.maxQuestion && <h5 className="text-muted">Pertanyaan {this.state.questionNumber+1} dari {this.props.maxQuestion}</h5>}
          </div>
          <div className="card-body">
            {this.state.questionNumber < this.props.maxQuestion ? <h4 className="card-text">Di antara 2 pilihan di bawah ini, mana yang lebih menggambarkan dirimu?</h4> : <h4 className="card-text">Kepribadian kamu adalah :</h4>}
            {this.state.questionNumber === this.props.maxQuestion? <Result result={this.state.result.join('')}/> 
            : 
            <Answers 
              q1={this.props.question[this.state.questionNumber].q1} 
              t1={this.props.question[this.state.questionNumber].t1} 
              q2={this.props.question[this.state.questionNumber].q2} 
              t2={this.props.question[this.state.questionNumber].t2} 
              handleChoice={this.handleChoice}
            />}
          </div>
        </div>
      </div>
    ) 
  }
}

export default QuizPage;