import { Button } from "antd";
import styles from "./Home.module.css";
import Image from "next/image"
import Link from "next/link";

export default function HomePage() {
    return (
        <div className={styles.container}>
            <div className={styles.pai}>
            <div className={styles.cardContainer}>
                <h1> Luiz Gabriel Lopes Carvalho </h1>
                <Image
                    className={styles.image}
                    src="/images/luiz.png"
                    alt="Minha foto"
                    width={500}
                    height={500}
                />
                <div className={styles.textContainer}>
                <h2>2TDS1</h2>
                <h3>Instrutores : Thiago Ferreira e Marcelo Carboni</h3>
                <h3>Matéria: FrontEnd</h3>
                <h3>Atividade: Avaliação Front-End</h3>
                <h4>Essa é a minha atividade avaliativa de front end, consumindo a minha API de equipamentos e manutenções, onde ambas as entidades são relacionadas pois os equipamentos têm manutenções. O Objetivo dessa atividade é demonstrar o consumo de uma API RESTful utilizando Next.js.</h4>
                </div>
                <Link href="/equipamentos" prefetch>
                    <Button type="primary">Acessar meus equipamentos</Button>
                </Link>
            </div>
</div>
            

        </div>
    );
}
