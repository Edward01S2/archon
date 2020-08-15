<?php

namespace App\Blocks;

use Log1x\AcfComposer\Block;
use StoutLogic\AcfBuilder\FieldsBuilder;

class Operating extends Block
{
    /**
     * The display name of the block.
     *
     * @var string
     */
    public $name = 'Operating';

    /**
     * The description of the block.
     *
     * @var string
     */
    public $description = 'Lorem ipsum...';

    /**
     * The category this block belongs to.
     *
     * @var string
     */
    public $category = 'custom';

    /**
     * The icon of this block.
     *
     * @var string|array
     */
    public $icon = 'screenoptions';

    /**
     * An array of block keywords.
     *
     * @var array
     */
    public $keywords = [];

    /**
     * An array of post types the block will be available to.
     *
     * @var array
     */
    public $post_types = ['post', 'page'];

    /**
     * The default display mode of the block that is shown to the user.
     *
     * @var string
     */
    public $mode = 'edit';

    /**
     * The block alignment class.
     *
     * @var string
     */
    public $align = 'wide';

    /**
     * Features supported by the block.
     *
     * @var array
     */
    public $supports = [];

    /**
     * Data to be passed to the block before rendering.
     *
     * @return array
     */
    public function with()
    {
        return [
            'subtitle' => get_field('subtitle'),
            'title' => get_field('title'),
            'section' => str_replace(' ', '-', strtolower(get_field('title'))),
            'image' => get_field('image'),
            'items' => get_field('items'),
        ];
    }

    /**
     * Assets to be enqueued when rendering the block.
     *
     * @return void
     */
    public function enqueue()
    {
        //
    }

    /**
     * The block field group.
     *
     * @return array
     */
    public function fields()
    {
        $operating = new FieldsBuilder('operating');

        $operating
            ->addText('subtitle')
            ->addText('title')
            ->addImage('image')
            ->addRepeater('items', [
                'layout' => 'block'
            ])
                ->addText('title')
                ->addTextarea('content')
            ->endRepeater();

        return $operating->build();
    }

}
