import BreakingNews from '../Components/BreakingNews';


export default function NewsPage() {
  return (
    
  <>
    <BreakingNews />
    <div className="mt-10 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">

      <div className=" w-full lg:max-w-full lg:flex">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="newCorona">
            <img className = "w-full h-full object-cover" src = "https://www.naftemporiki.gr/fu/t/1559550/600/600/0x0000000001795070/1/1/neos-koronaios-nea-krousmata-ipa-bietnam-tailandi-notia-korea-xongk-kongk.jpg" alt = "newsImg" />
        </div>
        <div className="border-r border-b border-l border-gray-400  lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">

Νέος κοροναϊός: Νέα κρούσματα σε ΗΠΑ, Βιετνάμ, Ταϊλάνδη, Νότια Κορέα και Χονγκ Κονγκ</div>
            <p className="text-gray-700 text-base">Νέο επιβεβαιωμένο κρούσμα του νέου κοροναϊού ανακοίνωσαν ότι εντόπισαν οι υγειονομικές αρχές του Βιετνάμ. Πρόκειται για ένα βρέφος ηλικίας τριών μηνών, με το σύνολο των ασθενών στη χώρα να ανέρχεται πλέον σε 15.</p>
          </div>
          <div className="flex items-center justify-start">
            <img className="w-10 h-10 rounded-full mr-4" src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="Avatar of Writer" />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">John Smith</p>
              <p className="text-gray-600">Aug 18</p>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <button className="oultine-none  w-20  text-white rounded-md transform hover:bg-orange ease-out duration-700  bg-FQAItem  px-4 py-1 uppercase ">
              READ
            </button>
          </div>

        </div>
      </div>

      <div className=" w-full lg:max-w-full lg:flex">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="Mountain">
            <img className = "w-full h-full object-cover" src = "https://i1.prth.gr/images/963x541/files/2020-07-31/arthrou-koronaios.jpg" alt = "newsImg" />
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">Κορωνοϊός: Ανησυχία για την αύξηση των κρουσμάτων.</div>
            <p className="text-gray-700 text-base">Συνεχίζει την δυναμική πορεία του ο κορωνοιός στη χώρα μας, αφήνοντας ολοένα και πιο έντονο το αποτύπωμά του, με κρούσματα σε δεκάδες περιοχές  με τον συνωστισμό των πολιτών να έχει γίνει  αναπόσπαστο κομμάτι της νέας κανονικότητας.</p>
          </div>
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full mr-4" src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="Avatar of Writer" />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">John Smith</p>
              <p className="text-gray-600">Aug 18</p>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <button className="oultine-none  w-20  text-white rounded-md transform hover:bg-orange ease-out duration-700  bg-FQAItem  px-4 py-1 uppercase ">
              READ
            </button>
          </div>
        </div>
      </div>
  
      <div className=" w-full lg:max-w-full lg:flex">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="Mountain">
            <img className = "w-full h-full object-cover" src = "https://www.tanea.gr/wp-content/uploads/2020/07/%CE%BA%CE%BF%CF%81%CE%BF%CE%BD%CE%B1%CE%B9%CE%BF%CF%82-5.jpg" alt="newsImg"/>
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">Οι βλάβες που άφησε ο κοροναϊός σε μια νέα γυναίκα</div>
            <p className="text-gray-700 text-base">Με σειρά αναρτήσεων της στο Twitter η Χάνα Ντέιβις μια νέα και υγιής γυναίκα που κόλλησε τον ιό πηγαίνοντας στο μανάβικο, όπως αναφέρει η ίδια, περιγράφει την «Οδύσσειά» της εδώ και τέσσερις μήνες στέλνοντας ένα ισχυρό μήνυμα κατά του εφησυχασμού.</p>
          </div>
          <div className="flex items-center justify-start">
            <img className="w-10 h-10 rounded-full mr-4" src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="Avatar of Writer" />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">John Smith</p>
              <p className="text-gray-600">Aug 18</p>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <button className="oultine-none  w-20  text-white rounded-md transform hover:bg-orange ease-out duration-700  bg-FQAItem  px-4 py-1 uppercase ">
              READ
            </button>
          </div>
        </div>
      </div>
    </div>

  </>
  )
}
