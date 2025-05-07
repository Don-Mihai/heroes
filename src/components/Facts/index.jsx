import React from 'react';
import styles from './Facts.module.scss';

const Facts = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.text}>
                <div className={styles.text__content}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis iure quibusdam necessitatibus inventore nesciunt dolorem, consectetur, eligendi doloremque enim dignissimos repudiandae rerum incidunt quos quod eum laudantium. Veniam fugit, nisi molestiae non ducimus incidunt provident iusto atque quae commodi repudiandae accusamus deserunt pariatur obcaecati harum cupiditate facere suscipit delectus quibusdam at id! Quaerat at consectetur blanditiis iste veniam culpa quasi, eius vitae eum voluptatum ratione corrupti eos debitis odit similique officiis aliquid consequatur tempore cumque consequuntur ullam asperiores quia suscipit dicta? Non obcaecati ut nesciunt, neque, suscipit sint placeat molestiae facilis excepturi nobis maiores enim quae minima tenetur quaerat tempora repellat ipsa vitae hic doloribus doloremque fugit modi aliquid? Dolorem repellendus perspiciatis atque nam rerum voluptates ut sunt maxime debitis totam quisquam officiis cum natus magnam iure libero incidunt quae cupiditate perferendis, commodi, saepe fugiat, autem ullam a? Mollitia iusto veritatis, ipsum incidunt, corporis dolorem temporibus, quae dicta voluptatem doloribus delectus. Velit voluptas sed ipsum nam sapiente facere iste distinctio reprehenderit dolores repudiandae at placeat reiciendis dicta sequi cumque, nostrum quod quas praesentium accusamus cum error quaerat similique. Est officiis aliquid incidunt perspiciatis temporibus! Sed eaque alias consectetur id aperiam quis maiores cumque beatae aut, quasi ab perferendis minima natus.</p>
                </div>
            </div>
            <div className={styles.wrap__foto}>
                <img className={styles.foto} src="/img/Heroes.png" alt="Heroes" />
            </div>
        </div>
    );
};

export default Facts;
