class global {
    static synonym = {}

    static tag = []
}

{ // set synonyms
    let c = 0
    let synonym = [
        '力 力学',
        '热 热学',
        '电磁 电磁学 电与磁 电和磁',
        '光 光学',
        '近代物理 近代物理学 现代物理 现代物理学 原子物理 原子物理学',

        '声 声学',
    ]
    synonym.forEach(g => {
        ++c
        global.synonym[c] = g.split(' ')
    })
}
{

}
