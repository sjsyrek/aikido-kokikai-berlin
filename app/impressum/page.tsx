import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum / Legal notice for kokikai.de",
};

export default function Impressum() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
      <h1 className="text-3xl font-black text-warm-900 md:text-5xl">
        Impressum
      </h1>

      <div className="mt-8 space-y-8 leading-relaxed text-warm-800">
        <section>
          <h2 className="text-xl font-bold text-warm-900">
            Angaben gem&auml;&szlig; &sect; 5 TMG
          </h2>
          <p className="mt-2">
            Steven Syrek
            <br />
            Chausseestra&szlig;e 102
            <br />
            10115 Berlin
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-warm-900">Kontakt</h2>
          <p className="mt-2">
            E-Mail:{" "}
            <a
              href="mailto:info@kokikai.de"
              className="text-brand-red underline hover:text-brand-red-dark"
            >
              info@kokikai.de
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-warm-900">
            Verantwortlich f&uuml;r den Inhalt nach &sect; 55 Abs. 2 RStV
          </h2>
          <p className="mt-2">
            Steven Syrek
            <br />
            Chausseestra&szlig;e 102
            <br />
            10115 Berlin
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-warm-900">
            Haftung f&uuml;r Inhalte
          </h2>
          <p className="mt-2">
            Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG
            f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen
            Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder
            gespeicherte fremde Informationen zu &uuml;berwachen oder nach
            Umst&auml;nden zu forschen, die auf eine rechtswidrige
            T&auml;tigkeit hinweisen.
          </p>
          <p className="mt-2">
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab
            dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
            m&ouml;glich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-warm-900">
            Haftung f&uuml;r Links
          </h2>
          <p className="mt-2">
            Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf
            deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir
            f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr
            &uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist
            stets der jeweilige Anbieter oder Betreiber der Seiten
            verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
            Verlinkung auf m&ouml;gliche Rechtsverst&ouml;&szlig;e
            &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt der
            Verlinkung nicht erkennbar.
          </p>
          <p className="mt-2">
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
            jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-warm-900">Urheberrecht</h2>
          <p className="mt-2">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes
            bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors
            bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f&uuml;r
            den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
          <p className="mt-2">
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
            wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
            werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
            wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
        </section>
      </div>
    </div>
  );
}
